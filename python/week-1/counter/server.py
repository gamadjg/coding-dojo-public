from crypt import methods
from flask import Flask, redirect, render_template, request, session

app = Flask(__name__)
app.secret_key = 'Count MEEEEEEEE'


@app.route('/')
def index():
    if'currentCount' not in session:
        session['currentCount'] = 1
    if'totalCount' not in session:
        session['totalCount'] = 1
    return render_template('index.html')

@app.route('/count')
def count():
    if'currentCount' in session:
        session['currentCount'] += 1
        session['totalCount'] += 1
    else:
        session['currentCount'] = 1
    return render_template('index.html')

@app.route('/countTwice')
def countTwice():
    if'currentCount' in session:
        session['currentCount'] += 2
        session['totalCount'] += 2
    else:
        session['currentCount'] = 1
    return render_template('index.html')

@app.route('/countIncrease', methods=['POST'])
def countIncreaseBy():
    print(request.form['countIncreaseByNum'])
    if'currentCount' in session:
        session['currentCount'] += int(request.form['countIncreaseByNum'])
        session['totalCount'] += int(request.form['countIncreaseByNum'])
    else:
        session['currentCount'] = 1
    return redirect('/')

@app.route('/destroy_session')
def destroy_session():
    session.pop('currentCount')
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)

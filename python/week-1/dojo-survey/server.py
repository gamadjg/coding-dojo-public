from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = 'Dojo sweepstakes'

@app.route('/')
def survey_home():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process_form():
    for val in request.form:
        session[val] = request.form[val]
        print(f'{val}: {session[val]}')
    return redirect('/result')

@app.route('/result')
def result():
    return render_template('result.html')

if __name__ == "__main__":
    app.run(debug=True)

from random import randint
from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = "Guess this number"

@app.route('/')
def index():
    if 'secretNum' not in session:
        session['secretNum'] = randint(1, 100)
        session['attempts'] = 0
        print(f"Secret Num: {session['secretNum']}")
    return render_template('index.html')

@app.route('/guess', methods=["POST"])
def numberGuess():
    session['guess'] = int(request.form['numberInput'])
    session['attempts'] += 1
    print(f"Secret Num: {session['secretNum']}")
    print(f"Guess: {session['guess']}")
    print(f"Total attempts: {session['attempts']}")
    if session['guess'] < session['secretNum']:
        print('Too low!')
        session['result'] = 'Too low!'
        session['color'] = 'red'
    elif session['guess'] > session['secretNum']:
        print('Too high!')
        session['result'] = 'Too high!'
        session['color'] = 'red'
    elif session['guess'] is session['secretNum']:
        print('Correct!')
        session['result'] = f"{session['guess']} was the number!"
        session['color'] = 'green'
    return redirect('/')

@app.route('/destroy_session')
def destroy_session():
    session.clear()
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)

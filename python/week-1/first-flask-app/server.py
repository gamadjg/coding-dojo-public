from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def get_dojo():
    return 'Dojo'

@app.route('/say/<name>')
def hello_user(name):
    return f'Hi {str(name)}'

@app.route('/loop/<loopCount>/<loopVal>')
def repeat_line(loopCount, loopVal):
    returnVal = ''
    for num in range(0, int(loopCount)):
        returnVal += str(loopVal) + " "
    return returnVal

@app.errorhandler(404)
def not_found(err):
    return "Sorry! No response. Try again."

if __name__ == "__main__":
    app.run(debug = True)
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def hello_world():
    return render_template("index.html", testVal="testing123")


@app.route("/play")
def play():
    return render_template("play.html", numberOfBoxes=3)


@app.route("/play/<int:numberOfBoxes>/")
def playMore(numberOfBoxes):
    return render_template("play.html", numberOfBoxes=numberOfBoxes)


@app.route("/play/<int:numberOfBoxes>/<color>")
def playMoreWithColors(numberOfBoxes, color):
    return render_template(
        "play.html",
        numberOfBoxes=numberOfBoxes,
        colorStyle=f"style=background-color:{color}",
    )


# @app.route('/')
# def hello_world():
#     return 'Hello World!'

# @app.route('/dojo')
# def get_dojo():
#     return 'Dojo'

# @app.route('/say/<name>')
# def hello_user(name):
#     return f'Hi {str(name)}'


@app.route("/loop/<int:loopCount>/<loopVal>")
def repeat_line(loopCount, loopVal):
    returnVal = ""
    for num in range(0, loopCount):
        returnVal += loopVal + " "
    return returnVal


if __name__ == "__main__":
    app.run(debug=True)

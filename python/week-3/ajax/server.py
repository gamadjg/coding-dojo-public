from flask import Flask
from flask import Flask, render_template, jsonify, request


app = Flask(__name__)
app.secret_key = "let me in!!!!"


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)

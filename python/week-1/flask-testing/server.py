from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = "more cookies"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/user/create", methods=["POST"])
def create_user():
    print("New user created")
    for val in request.form:
        session[val] = request.form[val]
    return redirect("/user/show")


@app.route("/user/show")
def show_new_user():
    print(session["name"])
    return render_template("index.html", userName=session["name"])


@app.errorhandler(404)
def not_found(e):
    return "Sorry! No response. Try again."


if __name__ == "__main__":
    app.run(debug=True)

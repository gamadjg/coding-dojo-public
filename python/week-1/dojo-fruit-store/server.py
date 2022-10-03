from flask import Flask, render_template, request, redirect, session
from os import listdir

app = Flask(__name__, static_url_path="/static")
app.secret_key = "bowls of fruit"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/checkout", methods=["POST"])
def checkout():
    for val in request.form:
        session[val] = request.form[val]
    total = (
        int(session["strawberry"]) + int(session["raspberry"]) + int(session["apple"])
    )
    print(request.form)
    print(f"Charging {request.form['first_name']} for {total} fruits")
    return redirect("/checkout/display")


@app.route("/checkout/display")
def checkout_display():
    return render_template("checkout.html")


@app.route("/fruits")
def fruits():
    fruitList = listdir("static/img")
    ["static/img/" + fruit for fruit in fruitList]
    for fruit in fruitList:
        fruitList[fruitList.index(fruit)] = "static/img/" + fruit
    print(fruitList)
    return render_template("fruits.html", fruitList=fruitList)


if __name__ == "__main__":
    app.run(debug=True)

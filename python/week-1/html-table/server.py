from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    users = [
        {"first_name": "Michael", "last_name": "Choi"},
        {"first_name": "John", "last_name": "Supsupin"},
        {"first_name": "Mark", "last_name": "Guillen"},
        {"first_name": "KB", "last_name": "Tonel"},
    ]

    tableHeader = list(users[0].keys())
    firstName = []
    lastName = []

    for user in users:
        firstName.append(user["first_name"])
        lastName.append(user["last_name"])
    listLength = len(firstName)
    return render_template(
        "index.html",
        tableHeader=tableHeader,
        listLength=listLength,
        firstName=firstName,
        lastName=lastName,
    )


if __name__ == "__main__":
    app.run(debug=True)

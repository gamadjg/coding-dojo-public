from flask import Flask

app = Flask(__name__)
app.secret_key = "shhhhhhhhh"
DATABASE = "burgers_and_restaurants"

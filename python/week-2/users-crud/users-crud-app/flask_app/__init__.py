from flask import Flask

app = Flask(__name__)
app.secret_key = "this is a secret key"
DATABASE = "users_schema"

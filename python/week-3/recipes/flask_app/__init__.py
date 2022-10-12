from flask import Flask
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.secret_key = "L33333333TM3333333111111111111N!"
DATABASE = "recipes"
bcrypt = Bcrypt(app)

from flask import Flask

app = Flask(
    __name__,
    static_url_path="/flask_app/static",
    template_folder="/flask_app/templates",
)
app.secret_key = "this is a secret key"
DATABASE = "card_game"

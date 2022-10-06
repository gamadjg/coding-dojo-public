from flask_app import app


app = Flask(__name__)
app.secret_key = ""

if __name__ == "__main__":
    app.run(debug=True)

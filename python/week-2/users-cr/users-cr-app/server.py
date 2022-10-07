from flask_app import app
from flask_app.controllers import controller_user

# DATABASE = "users_schema"
# app = Flask(
#     __name__, template_folder="flask_app/templates", static_folder="flask_app/static"
# )


# @app.route("/")
# def index():
#     users = User.get_all()
#     print(users)
#     return render_template("read.html", users=users)


# @app.route("/user/<int:id>/edit", methods="[POST]")
# def edit_user(id):
#     print(**request.form)
#     return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)

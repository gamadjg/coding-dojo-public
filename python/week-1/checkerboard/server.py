from flask import Flask, render_template, redirect

app = Flask(__name__)


# @app.route("/", defaults={"boardWidth": 8, "boardHeight": 8})
# @app.route("/<int:boardWidth>/", defaults={"boardHeight": 8})


# @app.route("/")
# @app.route("/<int:boardRow>/")
# @app.route("/<int:boardRow>/<int:boardColumn>/")
# def checkerboard(boardRow=2, boardColumn=2):
#     return render_template(
#         "index.html", boardRow=int(boardRow), boardColumn=int(boardColumn)
#     )


@app.route("/")
def checkerboard():
    return render_template(
        "index.html",
        boardRow=8,
        boardColumn=8,
        color1=f"style=background-color:red",
        color2=f"style=background-color:black",
    )


@app.route("/<int:boardRow>/")
def board_row(boardRow):
    return render_template(
        "index.html",
        boardRow=boardRow,
        boardColumn=8,
        color1=f"style=background-color:red",
        color2=f"style=background-color:black",
    )


@app.route("/<int:boardRow>/<int:boardColumn>/")
def board_row_column(boardRow, boardColumn):
    return render_template(
        "index.html",
        boardRow=boardRow,
        boardColumn=boardColumn,
        color1=f"style=background-color:red",
        color2=f"style=background-color:black",
    )


@app.route("/<int:boardRow>/<int:boardColumn>/<color1>")
def board_row_column_color(boardRow, boardColumn, color1):
    return render_template(
        "index.html",
        boardRow=boardRow,
        boardColumn=boardColumn,
        color1=f"style=background-color:{color1}",
        color2=f"style=background-color:black",
    )


@app.route("/<int:boardRow>/<int:boardColumn>/<color1>/<color2>")
def board_row_column_color_color(boardRow, boardColumn, color1, color2):
    return render_template(
        "index.html",
        boardRow=boardRow,
        boardColumn=boardColumn,
        color1=f"style=background-color:{color1}",
        color2=f"style=background-color:{color2}",
    )


if __name__ == "__main__":
    app.run(debug=True)

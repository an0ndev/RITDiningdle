import flask


app = flask.Flask(__name__)


@app.route("/")
def root():
    return flask.render_template("index.html")

@app.route("/campdle")
def cambpdle():
    return flask.render_template("campdle.html")


if __name__ == "__main__":
    app.run(host = "0.0.0.0", port=40000, debug=True)


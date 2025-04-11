from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

USER_DATA = {"username": "admin", "password": "123456"}


@app.route("/", methods=["GET", "POST"])
def login_handler():
    message = ""
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        if username == USER_DATA["username"] and password == USER_DATA["password"]:
            return redirect(url_for("welcome"))
        else:
            message = "❌ Incorrect username or password!"

    return render_template("login.html", message=message)


@app.route("/welcome-bf")
def welcome_bf():
    return render_template("welcome_bf.html")


@app.route("/welcome")
def welcome():
    return render_template("welcome.html")


@app.route("/login")
def login():
    return render_template("login.html")


if __name__ == "__main__":
    app.run(debug=True)

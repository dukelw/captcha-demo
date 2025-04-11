from flask import Flask, render_template, request, redirect, url_for, session
import os
import random

app = Flask(__name__)
app.config["SECRET_KEY"] = "demo_secret"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"

USER_DATA = {"username": "admin", "password": "123456"}


def get_random_captcha():
    captcha_images = os.listdir("E:/captcha-demo-v1/use-captcha/static/images")
    selected_image = random.choice(captcha_images)
    captcha_text = selected_image.split(".")[0]
    session["captcha_text"] = captcha_text
    return selected_image


@app.route("/", methods=["GET", "POST"])
@app.route("/", methods=["GET", "POST"])
def login_handler():
    if request.method == "GET":
        captcha_image = get_random_captcha()
        return render_template("login.html", captcha_image=captcha_image)

    username = request.form.get("username")
    password = request.form.get("password")
    user_captcha = request.form.get("captcha")

    if username == USER_DATA["username"] and password == USER_DATA["password"]:
        if user_captcha.lower() == session.get("captcha_text", "").lower():
            return redirect(url_for("welcome"))
        else:
            message = "❌ Incorrect CAPTCHA!"
    else:
        message = "❌ Incorrect username or password!"

    captcha_image = get_random_captcha()
    return render_template("login.html", message=message, captcha_image=captcha_image)


@app.route("/welcome")
def welcome():
    return render_template("welcome.html")


if __name__ == "__main__":
    app.run(debug=True)

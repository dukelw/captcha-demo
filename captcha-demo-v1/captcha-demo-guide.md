# CAPTCHA Demo: Sign-in With and Without Protection

This project demonstrates how using a CAPTCHA can help prevent brute-force attacks during the sign-in process.

---

## 🔓 Sign-in Without CAPTCHA

### 👉 How to Run

1. Open terminal at the `captcha-demo-v1` directory.
2. Navigate to the no-captcha version:
   ```bash
   cd no-captcha
   py app.py
   ```
3. Use the following credentials to log in:
   - **Username:** `admin`
   - **Password:** `123456`

### 🛡️ Run Brute Force Attack
Run the brute force script to simulate an attack:
```bash
py brute_force.py
```
You’ll see the attack successfully logs into the admin page without any challenge.

---

## 🔐 Sign-in With CAPTCHA

### 👉 How to Run

1. Open terminal at the `captcha-demo-v1` directory.
2. Navigate to the use-captcha version:
   ```bash
   cd use-captcha
   py app.py
   ```
3. Use the same login credentials:
   - **Username:** `admin`
   - **Password:** `123456`

### 🛡️ Run Brute Force Attack
Now try running the brute force script again:
```bash
py brute_force.py
```
This time, the CAPTCHA will block the attacker from logging in automatically.

---

## ✅ Conclusion

Adding CAPTCHA to your login process significantly improves security by stopping automated login attempts.

# CAPTCHA Demo: Sign-up With and Without Protection

Create a MongoDB database named **`captcha`**.

This project demonstrates how using a CAPTCHA can help prevent brute-force attacks during the sign-up process.

---

## 🔓 Sign-up Without CAPTCHA

### 👉 How to Run

1. Open terminal at the `captcha-demo-v2` directory.
2. Start the server:
   ```bash
   npm start
   ```
3. Open your browser at [http://localhost:4000](http://localhost:4000).
4. Click **Register** to create a new account using only:
   - **Username**
   - **Email**
   - **Password**

### 🧪 Demo Brute-force Attack

To simulate a spam attack that floods the database with fake accounts:

1. Open a **new terminal** at the `captcha-demo-v2` directory.
2. Run the attack script:
   ```bash
   node src/test/attack.js
   ```
3. Check your MongoDB database — you'll see **10 new accounts** created automatically.

---

## 🔐 Sign-up With CAPTCHA

### 👉 How to Run

1. Open terminal at the `captcha-demo-v2` directory.
2. Start the server:
   ```bash
   npm start
   ```
3. Go to [http://localhost:4000](http://localhost:4000).
4. Click **Register** and now you'll be required to enter:
   - **Username**
   - **Email**
   - **Password**
   - ✅ **CAPTCHA**

### 🧪 Demo Brute-force Attack

To test the protection:

1. Open a **new terminal** at the `captcha-demo-v2` directory.
2. Run the following script:
   ```bash
   node src/test/attack_captcha.js
   ```
3. Your MongoDB database will remain unchanged — **no fake accounts** are created.

---

## ✅ Conclusion

Adding CAPTCHA to your sign-up form protects your system from spam attacks and helps maintain the integrity of your database.

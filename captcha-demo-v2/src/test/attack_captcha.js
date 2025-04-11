const axios = require("axios");

const API_URL = "http://localhost:4000/user/captcha-register";
const NUM_REQUESTS = 10;

const generateFakeUser = (index) => ({
  username: `attacker${index}`,
  email: `attacker${index}@example.com`,
  password: "password123",
  captcha: "abcde",
});

const attack = async () => {
  console.log(
    `🚀 Initiating bot attack with ${NUM_REQUESTS} fake registrations...`
  );

  const promises = Array.from({ length: NUM_REQUESTS }, async (_, i) => {
    const fakeUser = generateFakeUser(i);
    try {
      const response = await axios.post(API_URL, fakeUser);
      if (response.statusCode === 200) {
        console.log(`✅ Successfully registered: ${fakeUser.email}`);
      }
    } catch (error) {
      console.error(`❌ Registration failed for ${fakeUser.email}`);
    }
  });

  await Promise.all(promises);
  console.log("🎯 Attack completed!");
};

attack();

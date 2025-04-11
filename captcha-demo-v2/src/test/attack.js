const axios = require("axios");

const API_URL = "http://localhost:4000/user/register";
const NUM_REQUESTS = 10;

const generateFakeUser = (index) => ({
  username: `attacker${index}`,
  email: `attacker${index}@example.com`,
  password: "password123",
});

const attack = async () => {
  console.log(
    `🚀 Initiating bot attack with ${NUM_REQUESTS} fake registrations...`
  );

  const promises = Array.from({ length: NUM_REQUESTS }, (_, i) => {
    const fakeUser = generateFakeUser(i);
    return axios
      .post(API_URL, fakeUser)
      .then(() => console.log(`✅ Successfully registered: ${fakeUser.email}`))
      .catch((error) =>
        console.error(
          `❌ Registration failed: ${error.response?.data || error.message}`
        )
      );
  });

  await Promise.all(promises);
  console.log("🎯 Attack completed successfully!");
};

attack();

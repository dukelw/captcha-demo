const bcrypt = require("bcrypt");
const { UserModel } = require("../models/User");

module.exports = {
  registerUser: async (username, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      user_name: username,
      user_email: email,
      user_password: hashedPassword,
    });

    await newUser.save();
  },

  findUserByEmail: async (email) => {
    return await UserModel.findOne({ user_email: email });
  },

  authenticateUser: async (email, password) => {
    const user = await UserModel.findOne({ user_email: email });
    if (!user) return false;
    return await bcrypt.compare(password, user.user_password);
  },
};

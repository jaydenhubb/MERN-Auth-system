const asynHandler = require("express-async-handler");
const User = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const { createToken } = require("../utils");
const parser = require("ua-parser-js");


// Create User
const registerUser = asynHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   validate
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in required fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be greater than 6 characters");
  }
  // Check if user exists

  const exists = await User.findOne({ email });
  if (exists) {
    res.status(400);
    throw new Error("This email has already been used");
  }

  // Get user agent
  const ua = parser(req.headers["user-agent"]);
  const userAgent = [ua.ua];
  // create new user

  const user = await User.create({ name, email, password, userAgent });

  // Generate Token
  const token = createToken(user._id);

  //send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), //one day
    sameSite: "none",
    secure: true,
  });
  if (user) {
    const { _id, name, email, phone, bio, photo, role, isVerified } = user;
    res.status(201).json({
      _id,
      name,
      email,
      phone,
      bio,
      photo,
      role,
      isVerified,
      token,
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});


// Log in user
const loginUser = asynHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill in required fields");
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("Email was not found, please sign up");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    res.status(404);
    throw new Error("Invalid email or password");
  }
  // Trigger 2FA for unknown userAgent

  const token = createToken(user._id);
  if (user && validPassword) {
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), //one day
      sameSite: "none",
      secure: true,
    });
    const { _id, name, email, phone, bio, photo, role, isVerified } = user;
    res.status(201).json({
      _id,
      name,
      email,
      phone,
      bio,
      photo,
      role,
      isVerified,
      token,
    });
  } else {
    res.status(500);
    throw new Error("Something went wrong, please try again");
  }
});


// Log out
const logOutUser = asynHandler(async(req, res)=>{
    res.cookie("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
      sameSite: "none",
      secure: true,
    });
    return res.status(200).json({Message: "Logout successful"})
})

module.exports = {
  registerUser,
  loginUser,
  logOutUser
};

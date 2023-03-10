const jwt = require("jsonwebtoken");

const getUser = async (username) => {
  return {
    userId: 123,
    password: "123456",
    username,
  };
};

//LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await getUser(username);

  if (user.password !== password) {
    return res.status(403).json({
      error: "invalid login",
    });
  }

  delete user.password;

  // access token
  const token = jwt.sign(user, process.env.JWT_SEC, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
  });

  res.status(200).send({
    username: user.username,
    id: user.userId,
    accessToken: token,
  });

  console.log("User is logged in successfully >>");
};

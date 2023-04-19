const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log("!SDAFSDAFSADFSDFASDFASDFSADFSADFSADFADSF");
  console.log(token);
  if (!token) {
    console.log("OIDAAAAA NO TOKEN");
    return res.status(401).json("You are not logged in");
  }
  try {
    const data = verify(token, process.env.MY_SECRET);
    req.id = data;
    console.log(data)
    return next();
  } catch (err) {
      return res.status(403).json("Invalid token");
  }
};

module.exports = { validateToken };

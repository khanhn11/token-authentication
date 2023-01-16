const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth.route");
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT || 4000, () => {
  console.log(`Server is running on Port >> ${PORT}`);
});

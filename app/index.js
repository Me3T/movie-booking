const express = require("express");
const cors = require("cors");

const adminRoutes = require("../routes/admin.routes");
const userRoutes = require("../routes/user.routes");
const authRoutes = require("../routes/auth.routes");

const { authenticationMiddleware } = require("../middlewares/auth.middleware");

const app = express();
app.use(cors());
app.use(authenticationMiddleware);

app.use(express.json());

app.get("/", (req, res) =>
  res.json({ status: "success", message: "Server is up and running" })
);

app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

module.exports = app;

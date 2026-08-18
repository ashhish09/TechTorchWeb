require("dotenv").config();
const companyEnvironmentRoutes = require("./src/routes/companyEnvironmentRoutes");
const latestUpdateRoutes = require("./src/routes/latestUpdateRoutes");
const featuredStoryRoutes = require("./src/routes/featuredStoryRoutes");
const opportunityRoutes = require("./src/routes/opportunityRoutes");
const upcomingEventRoutes = require("./src/routes/upcomingEventRoutes");
const {connectDB} = require("./src/config/db");
const errorMiddleware = require("./src/middlewares/error.Middleware");
const notFound = require("./src/middlewares/notFound.Middleware");
const authRoutes = require("./src/routes/authRoutes");
connectDB();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/company-environment", companyEnvironmentRoutes);
app.use("/api/latest-updates", latestUpdateRoutes);
app.use("/api/featured-stories", featuredStoryRoutes);
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/upcoming-events", upcomingEventRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("TechTorch Backend is running");
});


app.use(notFound);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
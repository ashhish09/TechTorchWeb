require("dotenv").config();
const companyEnvironmentRoutes = require("./src/routes/companyEnvironmentRoutes");
const latestUpdateRoutes = require("./src/routes/latestUpdateRoutes");
const featuredStoryRoutes = require("./src/routes/featuredStoryRoutes");
const opportunityRoutes = require("./src/routes/opportunityRoutes");
const upcomingEventRoutes = require("./src/routes/upcomingEventRoutes");
const {connectDB} = require("./src/config/db");
const errorMiddleware = require("./src/middlewares/error.Middleware");
const notFound = require("./src/middlewares/notFound.Middleware");
const { generalLimiter } = require("./src/middlewares/rateLimiter");
const sanitizeInput = require("./src/middlewares/sanitizeInput");
const authRoutes = require("./src/routes/authRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
connectDB();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const hpp = require("hpp");

const app = express();

app.set("trust proxy", 1);

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || true,
    credentials: true,
  })
);
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(sanitizeInput);
app.use(hpp());

app.use("/api", generalLimiter);

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
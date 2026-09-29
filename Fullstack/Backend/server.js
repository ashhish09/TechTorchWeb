require("dotenv").config();

const {connectDB} = require("./src/config/db");
const errorMiddleware = require("./src/middlewares/error.Middleware");
const notFound = require("./src/middlewares/notFound.Middleware");
const { generalLimiter } = require("./src/middlewares/rateLimiter");
const sanitizeInput = require("./src/middlewares/sanitizeInput");
const authRoutes = require("./src/routes/authRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const newsRoutes = require("./src/routes/newsRoutes");
const jobOpeningRoutes = require("./src/routes/jobOpeningRoutes");
const eventRoutes = require("./src/routes/eventRoutes");
const latestUpdateRoutes = require("./src/routes/latestUpdateRoutes");;
connectDB();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const hpp = require("hpp");

const app = express();

app.use(cors());
app.use(express.json());
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
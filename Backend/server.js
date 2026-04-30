const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

/* ================= CONFIG ================= */
dotenv.config();
connectDB();

/* ================= ROUTES ================= */
const blogRoutes = require("./routes/blog.routes");
const teamRoutes = require("./routes/team.routes");
const testimonialRoutes = require("./routes/testimonial.routes");
const coldLeadRoutes = require("./routes/coldLeadRoutes");
const contactRoutes = require("./routes/contactRoutes");
const planRoutes = require("./routes/planRoutes");
const authRoutes = require("./routes/adminAuth.routes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

/* ================= CORS ================= */
app.use(cors({
  origin: "*",
  credentials: true
}));

/* ================= MIDDLEWARE ================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= STATIC ================= */
app.use("/uploads", express.static("uploads"));

/* ================= API ROUTES ================= */
app.use("/api/blogs", blogRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/leads", coldLeadRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.send("API Running...");
});

/* ================= 404 HANDLER ================= */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

/* ================= ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
  });
});

/* ================= START SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
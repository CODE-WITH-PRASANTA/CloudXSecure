const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const blogRoutes = require("./routes/blog.routes");
const teamRoutes = require("./routes/team.routes");
const testimonialRoutes = require("./routes/testimonial.routes");
const coldLeadRoutes = require("./routes/coldLeadRoutes");
const contactRoutes = require("./routes/contactRoutes");
const planRoutes = require("./routes/planRoutes");


const app = express();

/* ================= CORS ================= */
app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:5174","http://localhost:5175","http://localhost:5176"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


/* ================= MIDDLEWARE ================= */
app.use(express.json());

app.use("/uploads", express.static("uploads"));

/* ================= ROUTES ================= */
app.use("/api/blogs", blogRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/leads", coldLeadRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/plans", planRoutes);




/* ================= START SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
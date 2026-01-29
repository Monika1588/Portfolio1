const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();  

app.use(cors({
  origin: "https://jolly-tiramisu-3bc1f2.netlify.app",
  credentials: true
}));
app.use(express.json());

app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend server running on port ${PORT}`)
);

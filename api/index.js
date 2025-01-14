import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables 
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

// Add security middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev')); // logging
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB - removed deprecated options
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.error("Database Connection Failed!", err);
  });

// Configure routes
app.use("/api/user", userRouter); // All requests to /api/user will be handled by the user router
app.use("/api/auth", authRouter); // All requests to /api/auth will be handled by the auth router
 
// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
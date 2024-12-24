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

// Validate required environment variables
const requiredEnvVars = ['MONGODB_URI', 'PORT'];
requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

const app = express();

// Add security middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev')); // logging
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
app.use((err, req, res, next) => { // This middleware catches any errors that occur during request processing and sends a 500 Internal Server Error response with a generic error message.
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!'
  });
});

// Create HTTP server separately for graceful shutdown
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed.');
      process.exit(0);
    });
  });
});





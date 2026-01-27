import mongoose from "mongoose";
import User from "./modals/User.js"; // adjust path
import dotenv from "dotenv";
dotenv.config();

// Connect to DB
const DB = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/test";
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ DB connected"))
  .catch(err => console.log("❌ DB connection error:", err));

// Function to create first admin
const createAdmin = async () => {
  try {
    // 1️⃣ Check if admin already exists
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("⚠️ Admin user already exists:", existingAdmin.email);
      process.exit();
    }

    // 2️⃣ Create admin user (password will be hashed automatically)
    const admin = new User({
      firstName: "Admin",
      lastName: "User",
      email: "abdi@example.com",
      password: "abdi1212@", // no need to hash manually
      role: "admin",
    });

    await admin.save();
    console.log("✅ Admin user created successfully:", admin.email);
    process.exit();
  } catch (error) {
    console.error("❌ Failed to create admin:", error.message);
    process.exit(1);
  }
};

createAdmin();

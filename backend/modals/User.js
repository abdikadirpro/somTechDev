import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      select: false,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      select: false,
      validate: [
        {
          validator: (value) =>
            validator.isStrongPassword(value, {
              minLength: 6,
              minLowercase: 1,
              minUppercase: 0,
              minNumbers: 1,
              minSymbols: 1,
            }),
          message:
            "Password must be at least 6 characters and include numbers and symbols",
        },
      ],
    },

     role: {
      type: String,
      enum: ["user", "admin"],
      default: "user", // every new signup is user by default
    },
  },
  { timestamps: true }
);

// 🔐 Hash password
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// 🔑 Compare password
userSchema.methods.comparePassword = async function (givenPassword) {
  return bcrypt.compare(givenPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;

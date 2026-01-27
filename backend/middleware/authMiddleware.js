import jwt from "jsonwebtoken";
import User from "../modals/User.js";
import { JWT_SECRET } from "../conflig/config.js";

export const authenticate = async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer")
      ? req.headers.authorization.split(" ")[1]
      : req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // 🔥 IMPORTANT LINE
    req.user = await User.findById(decoded._id).select("-password");

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

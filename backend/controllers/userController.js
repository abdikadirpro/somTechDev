import User from "../modals/User.js";
import jwb from 'jsonwebtoken';
import {JWT_SECRET} from '../conflig/config.js'

export const registerUser = async (req,res)=>{
    try {
       const { firstName, lastName, email, password } = req.body;

        const isUserExist = await User.findOne({
            $or:[
                {firstName:firstName.toLowerCase()},
                {lastName:lastName.toLowerCase()},
                {email:email.toLowerCase()},
               
            ]
        });
       if (isUserExist) {
   return res.status(400).json({ message: "Email or name already exists" });
}


       const userInfo = new User({
                    firstName,
                    lastName,
                    email,
                    password
                    });

        await userInfo.save();
        userInfo.password = undefined
       return res.status(201).json({ message: "User registered successfully", user: userInfo });

      
    } catch (error) {
        console.log("error at userRegister",error.message);
        res.send("something went wrong" + error.message)
    }
}

export const loginUser = async (req,res)=>{

   try {
     const {email, password} = req.body;

    const isUserExist = await User.findOne({email : email.toLowerCase()}).select("+password");

    if(!isUserExist){
        return res.status(400).json("email is not found")
    }

    const isCorrectPassword = await isUserExist.comparePassword(password);
    if(!isCorrectPassword){
    return res.status(400).json("inCorrect password")
    } 

     
       const expiresIn = 7 * 24 * 60 * 60; // 7 days (seconds)

    const token = jwb.sign(
      { _id: isUserExist._id },
      JWT_SECRET,
      { expiresIn } // ✅ correct key
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set true in production with HTTPS
      maxAge: expiresIn * 1000,
    });

    isUserExist.password = undefined;


     res.status(200).send({...isUserExist.toJSON(),expiresIn})
   } catch (error) {
    console.log(error)
   }


}




// POST /create-admin
export const createAdminUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // 1️⃣ Only admins can create other admins
    if (!req.user || req.user.role == "admin") {
      return res.status(403).json({ message: "Only admins can create admins" });
    }

    // 2️⃣ Check if email already exists
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    // 3️⃣ Create admin user (password will hash automatically)
    const admin = new User({
      firstName,
      lastName,
      email,
      password,  // ✅ pre-save hook will hash this
      role: "admin",
    });

    await admin.save();

    // 4️⃣ Hide password before sending response
    admin.password = undefined;

    // 5️⃣ Send response
    res.status(201).json({ message: "Admin created successfully", user: admin });
  } catch (err) {
    console.error("❌ createAdminUser error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

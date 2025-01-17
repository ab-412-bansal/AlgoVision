// import express from "express"
// import UserModel from "../models/User.js"
// import jwt from "jsonwebtoken"

// const router = express.Router()
// const JWT_SECRET_USER = "JLK#@$JKLKJSDFJLK923978472"


// router.post("/signup", async (req, res) => {
//     // validation of email, password, name goes here...
//     try {
//         const email = req.body.email
//         const password = req.body.password
//         const name = req.body.name
//         const username = req.body.username
//         const user = await UserModel.create({
//             username:username,
//             email: email,
//             password: password,
//             name: name,
//         })
//         if(!user){
//             return res.json({msg: "Error"})
//         }

//         const token = jwt.sign({ username: username }, JWT_SECRET_USER)
//         return res.json({ token })

//         // Jwt creation...
//         // return the JWT token
//         // return res.json({ user })

//     } catch (err) {
//         console.log("error: ", err)
//         return res.json({ msg: "Error in user registration" })
//     }
// })

// router.post("/login", async (req, res) => {
//     try {
//         const username = req.body.username
//         const password = req.body.password
//         const admin = await UserModel.findOne({ username:username, password: password })
//         if (!admin) {
//             return res.json({ msg: "Invalid Username or password" })
//         }
//         const token = jwt.sign({ username: username }, JWT_SECRET_USER)
//         return res.json({ token })

//     } catch (error) {
//         console.log("Error: ", error)
//         return res.json({ msg: error })
//     }
// })

// export default router

import express from "express";
import bcrypt from "bcrypt"; // For password hashing
import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";
import dotenv from "dotenv";
import authenticate from "../middleware/authMiddleware.js"
dotenv.config();

const router = express.Router();
const JWT_SECRET_USER = "JLK#@$JKLKJSDFJLK923978472";

// Route for User Signup
router.post("/signup", async (req, res) => {
    try {
        const { email, password, name, username } = req.body;

        // Validate request body
        if (!email || !password || !name || !username) {
            return res.status(400).json({ msg: "All fields are required." });
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ msg: "Username already taken." });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await UserModel.create({
            username,
            email,
            password: hashedPassword,
            name,
        });

        if (!user) {
            return res.status(500).json({ msg: "Error creating user." });
        }

        // Generate JWT token
        const token = jwt.sign({ username: username }, JWT_SECRET_USER, { expiresIn: "1d" });
        res.cookie("authToken", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24, // 1 day
            secure: false, // Secure in production
        });

        return res.status(200).json({ msg: "Signup successful!" });
    } catch (err) {
        console.error("Error during signup: ", err);
        return res.status(500).json({ msg: "Internal server error." });
    }
});

// Route for User Login
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate request body
        if (!username || !password) {
            return res.status(400).json({ msg: "Username and password are required." });
        }

        // Find user by username
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ msg: "Invalid username or password." });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Invalid username or password." });
        }

        // Generate JWT token
        const token = jwt.sign({ username: username }, JWT_SECRET_USER, { expiresIn: "1d" });
        res.cookie("authToken", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24, // 1 day
            secure: false, // Secure in production
        });
        console.log("Cookies sent",res.cookie)

        return res.status(200).json({ msg: "Login successful!"});
    } catch (err) {
        console.error("Error during login: ", err);
        return res.status(500).json({ msg: "Internal server error." });
    }
});

router.get("/authenticate",authenticate,(req,res) => {
    return res.status(200).json({ msg: "Valid User"});
});

// Logout Route
router.post("/logout", (req, res) => {
    res.clearCookie("authToken");
    return res.status(200).json({ msg: "Logged out successfully." });
});

export default router;

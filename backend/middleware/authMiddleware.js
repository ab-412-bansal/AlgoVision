import jwt from "jsonwebtoken";

const JWT_SECRET_USER = "JLK#@$JKLKJSDFJLK923978472";

const authenticate = (req, res, next) => {
    console.log("Cookies recieved",req.cookies)
    const token = req.cookies.authToken;

    if (!token) {
        return res.status(401).json({ msg: "No token provided, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET_USER);
        req.user = decoded; // Add user info to the request object
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};

export default authenticate;

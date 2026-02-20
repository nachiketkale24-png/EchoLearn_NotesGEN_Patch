import UserModel from "../models/user.model.js";
import { getToken } from "../utils/token.js";

export const googleAuth = async(req, res) => {
    try{
        const { email, name } = req.body;
        let user = await UserModel.findOne({ email });
        if(!user){
            user = await UserModel.create({ name, email });
        }
        let token = await getToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.status(200).json(user);
    } catch (error) {
        console.error("googleAuth error:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export const logout = async(req, res) => {
    try{
        await res.clearCookie("token");
        return res.status(200).json({ message: "Logout successful" })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


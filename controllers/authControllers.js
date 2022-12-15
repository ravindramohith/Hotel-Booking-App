import User from "../models/User"
import ErrorHandler from "../utils/errorController"
import catchAsync from "../middlewares/catchAsync"
import APIFeatures from "../utils/apiFeatures"
import cloudinary from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export const register = catchAsync(async (req, res) => {
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'RedRooms/avatars',
        width: '150',
        crop: 'scale',
    })
    const { name, email, password } = req.body
    const user = await User.create({
        name, email, password, avatar: {
            public_id: result.public_id,
            url: result.secure_url
        }
    });

    res.status(200).json({
        success: true,
        message: 'User created successfully'
    })
})


export const getCurrentUser = catchAsync(async (req, res) => {
    const user = await User.findById(req.user._id);

    res.status(200).json({
        success: true,
        user,
    })
})


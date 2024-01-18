import mongoose from "mongoose";

const userSchema = new mongoose.Model({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const userModel = mongoose.model('user', userSchema);

export default userModel;
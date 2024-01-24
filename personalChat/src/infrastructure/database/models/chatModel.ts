import mongoose from "mongoose";


const chatShcema = new mongoose.Schema({
    message_text: {
        type: String,
        required: true
    },
    senderId: {
        type: String,
        required: true,
    },
    receiverId: {
        type: String,
        required: true,
    }
}, {timestamps: true});


const chatModel = mongoose.model('chat', chatShcema);

export default chatModel;
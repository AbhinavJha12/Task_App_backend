import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:String,
    description: {
        type:String,
        unique:true,
        required : true
    },
    password:{
        type: String,
        select: false,
    },
    isCompleted:{
        type:Boolean,
        default: false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Task = mongoose.model("Task", schema);
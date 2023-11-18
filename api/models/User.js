import {Schema, model} from "mongoose";

const userSchema = new Schema(
    {
        firstname: { 
            type: String, 
            require: true,
            trim: true
        },
        lastname: { 
            type: String,
            require: true,
            trim: true
        },
        image: { 
            type: String,
            require: true
        }
    },{
        timestamps: true
    }
);

export const User = model('User', userSchema)

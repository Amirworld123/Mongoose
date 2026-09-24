import mongoose from "mongoose";
import { GenderEnum } from "../../common/enum/user.enum.js";
const userschema = new mongoose.Schema(
  {
    firstname: String,
    lastname: { type: String, required: true },

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    DOB: Date,
    confirmEmailAt: Date,

    gender: {
      type: Number,
      enum: [...Object.values(GenderEnum)],
      default: GenderEnum.MALE,
    },

  
  },
  {
    
    timestamps: true,
    strict: true,
    autoIndex:true,
    optimisticConcurrency: true,
  },
);

export const UserModel = mongoose.model("User", userschema);

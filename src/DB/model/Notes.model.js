import mongoose from "mongoose";

const noteschema = new mongoose.Schema({
      title: {
      type: String,
      required: true,
      validate: {
        validator: function (title) {
          return title !== title.toUpperCase();
        },
      },
    },
    content: {
      type: String,
      required: true,
    },

    userId:{type:mongoose.Types.ObjectId, ref:"User", required:true}
},{
  timestamps:true
})

export const NotesModel = mongoose.model("Notes", noteschema)
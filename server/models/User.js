const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    name: {
      type: String,
      // required: true
    },
    email: {
      type: String,
      // required: true
    },
    espec: {
      type: String,
    },
    password: {
      type: String,
      required: true
    },
    about_me: {
      type: String
    },
    avatar: {
      type: String,
      default:"https://statics.cuantocabron.com/images_common/trofeos/cuantocabron.png"
    },
    role: {
      type: String,
      enum: ["User", "Administrator"],
      default: "User"
    },
    reports: {
      type: Number,
      default: 5
    },
    ideas: [
      {
        type: Schema.Types.ObjectId,
        ref: "Idea"
      }
    ],
    response: [
      {
        type: Schema.Types.ObjectId,
        ref: "Response"
      }
    ],
    favs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Favoritos"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
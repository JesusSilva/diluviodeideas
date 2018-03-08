const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeaSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    mensaje: {
      type: String,
      required: true
    },
    imagen: {
      type: String,
      default: ""
    },
    privacy: {
      type: Boolean,
      default: false
    },
    status: {
      type: Boolean,
      default:true
    },
    join: [
      {
        type: Schema.Types.ObjectId,
        ref: "Colaboracion"
      }
    ],
    pending: [
      {
        type: Schema.Types.ObjectId,
        ref: "Colaboracion"
      }
    ],
    rate: {
      type: Number
    },
    response_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "Response"
      }
    ],
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Idea = mongoose.model("Idea", IdeaSchema);
module.exports = Idea;

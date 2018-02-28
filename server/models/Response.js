const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResponseSchema = new Schema(
  {
    mensaje: {
      type: String,
      required: true
    },
    rate: {
      type: Number,
      default: 0
    },
    reports: {
      type: Number,
      default: 0
    },
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

const Response = mongoose.model("Response", ResponseSchema);
module.exports = Response;

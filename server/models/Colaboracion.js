const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColaboracionSchema = new Schema(
  {
    idea_id: {
      type: Schema.Types.ObjectId,
      ref: "Idea"
    },
    status: {
      type: Boolean,
      default: false
    },
    colaborador: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    author: {
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

const Colaboracion = mongoose.model("Colaboracion", ColaboracionSchema);
module.exports = Colaboracion;

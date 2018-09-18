const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MensajeSchema = new Schema(
  {
    asunto: {
      type: String,
      required: true
    },
    contenido: {
      type: String,
      required: true
    },
    emisor: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    receptor: {
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

const Mensaje = mongoose.model("Mensaje", MensajeSchema);
module.exports = Mensaje;

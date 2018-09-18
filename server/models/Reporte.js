const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReporteSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    response_id: {
        type: Schema.Types.ObjectId,
        ref: "Response"
    },
    mensaje: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Reporte = mongoose.model("Reporte", ReporteSchema);
module.exports = Reporte;

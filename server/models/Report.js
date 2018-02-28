const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema(
  {
    mensaje: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      default: true
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    response_id: {
      type: Schema.Types.ObjectId,
      ref: "Response"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Report = mongoose.model("Report", ReportSchema);
module.exports = Report;

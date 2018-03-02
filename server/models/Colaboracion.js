const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema(
  {
    colaboracion: {
      type: Boolean,
      required: true
    },
    status: {
      type: Boolean,
      default: true
    },
    emisor: {
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

const Report = mongoose.model("Report", ReportSchema);
module.exports = Report;

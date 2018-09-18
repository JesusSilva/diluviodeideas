const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritosSchema = new Schema(
  {
    idea_id: {
      type: Schema.Types.ObjectId,
      ref: "idea"
    },
    status: {
      type: Boolean,
      default: false
    },
    user: {
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

const Favoritos = mongoose.model("Favoritos", FavoritosSchema);
module.exports = Favoritos;
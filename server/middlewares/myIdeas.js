const Idea = require("../models/Idea");
const myIdeas = (req, res, next) => {
  const ideaId = req.params.id;
  Idea.findOne({ _id: ideaId })
    .then(idea => {
      if (req.user.role === "Administrator" || (req.user && JSON.stringify(idea.user_id) === JSON.stringify(req.user._id))){
        next();
      } else {
        return res.status(500).json({ message: "Middleware myIdeas - Oops, algo salió mal :(" });
      }
    })
    .catch(err => next(err));
};
module.exports = myIdeas;

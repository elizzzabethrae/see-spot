const postQueries = require("../db/queries.posts.js");

module.exports = {

  lost(req, res, next){
    postQueries.getLostPosts((err, posts) => {
      if(err){
        console.log("ERROR", err);
        res.redirect(500, "static/index");
      } else {
        res.render("posts/lost", {posts});
      }
    })
  },

  found(req, res, next){
    postQueries.getFoundPosts((err, posts) => {
      if(err){
        console.log("ERROR", err);
        res.redirect(500, "static/index");
      } else {
        res.render("posts/found", {posts});
      }
    })
  },

  new(req, res, next) {
    res.render("posts/new");
  },

  create(req, res, next){
    let newPost = {
      lost: req.body.lost,
      found: req.body.found,
      animal: req.body.animal,
      color: req.body.color,
      description: req.body.description,
      date: req.body.date,
      other: req.body.other,
      reunited: req.body.reunited
    };
    postQueries.addPost(newPost, (err, post) => {
      if(err){
        console.log("ERROR", err);
        res.redirect(500, "/posts/new");
      } else {
        //req.flash("notice", "You've successfully posted an animal!");
        res.redirect(303, "/");
        //I CHANGED THIS IF ITS WRONG
      }
    });
  }

}

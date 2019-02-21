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
      reunited: req.body.reunited || false
    };
    postQueries.addPost(newPost, (err, post) => {
      if(err){
        console.log("ERROR", err);
      //  req.flash("there was an error");
      //WHY is that erroring out?
        res.redirect(500, "/posts/new");
      } else {
      //  req.flash("notice", "You've successfully posted an animal!");
        res.redirect(303, "/");
        //I CHANGED THIS IF ITS WRONG
      }
    });
  },

  show(req, res, next) {
    postQueries.getPost(req.params.id, (err, post) => {
      if(err || post == null) {
        console.log("ERROR", err);
        res.redirect(404, "/");
      } else {
        res.render("posts/show", {post});
      }
    });
  },

  edit(req, res, next) {
    postQueries.getPost(req.params.id, (err, post) => {
        if(err || post == null) {
          console.log("error", err);
          res.redirect(404, "/");
        } else {
          console.log(post);
          res.render("posts/edit", {post});
        }
    });
  },

  update(req, res, next) {
    postQueries.updatePost(req.params.id, req.body, (err, post) => {
      if(err || post == null) {
        console.log("Error", err);
        req.flash("There was an error editing this post, were all elements filled out?")
       res.redirect(404, "/");
      } else {
        res.redirect(`/posts/${post.id}`);
      }
    });
  },

  destroy(req, res, next) {
    postQueries.deletePost(req.params.id, (err, post) => {
      if(err) {
        res.redirect(500, `posts/${post.id}`);
      } else {
        res.redirect(303, "/");
      }
    });
  }

}

const postQueries = require("../db/queries.posts.js");


module.exports = {

  lost(req, res, next){
    postQueries.getLostPosts((err, posts) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.render("posts/lost", {posts});
      }
    })
  },

  found(req, res, next){
    postQueries.getFoundPosts((err, posts) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.render("posts/found", {posts});
      }
    })
  }

}

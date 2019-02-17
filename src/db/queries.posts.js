const Post = require("./models").Post;

module.exports = {

  getAllPosts(callback){
    return Post.all()
    .then((posts) => {
      callback(null, posts);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getLostPosts(callback){
    return Post.findAll({
      where: {
        lost: true
      }
    })
    .then((posts) => {
      callback(null, posts);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getFoundPosts(callback){
    return Post.findAll({
      where: {
        found: true
      }
    })
    .then((posts) => {
      callback(null, posts);
    })
    .catch((err) => {
      callback(err);
    })
  },

}

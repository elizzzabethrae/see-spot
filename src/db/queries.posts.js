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
        lost: true,
      //  reunited: false
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
        found: true,
      //  reunited: false
      }
    })
    .then((posts) => {
      callback(null, posts);
    })
    .catch((err) => {
      callback(err);
    })
  },

  addPost(newPost, callback){
    return Post.create({
      lost: newPost.lost,
      found: newPost.found,
      animal: newPost.animal,
      color: newPost.color,
      description: newPost.description,
      date: newPost.date,
      other: newPost.other,
      reunited: newPost.reunited
    })
    .then((post) => {
      callback(null, post);
    })
    .catch((err) => {
      callback(err);
    })
  },

}

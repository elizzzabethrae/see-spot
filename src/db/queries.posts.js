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

  getPost(id, callback){
    return Post.findById(id)
    .then((post) => {
      callback(null, post);
    })
    .catch((err) => {
      callback(err);
    })
  },

  updatePost(id, updatedPost, callback) {
    return Post.findById(id)
    .then((post) => {
      if(!post) {
        return callback ("Post not Found");
      }
      post.update(updatedPost, {
        fields: Object.keys(updatedPost)
      })
      .then(() => {
        callback(null, post);
      })
      .catch((err) => {
        callback(err);
      });
    });
  },

  deletePost(id, callback) {
    return Post.destroy({
      where: {id}
    })
    .then((post) => {
      callback(null, post);
    })
    .catch((err) => {
      callback(err);
    })
  }

}

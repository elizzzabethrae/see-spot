module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const postRoutes = require("../routes/posts");

    app.use(staticRoutes);
    app.use(postRoutes);
  }
}

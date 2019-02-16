
const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/posts/";
const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;

describe("routes : posts", () => {

  beforeEach((done) => {
  this.post;
  sequelize.sync({force: true}).then((res) => {

   Post.create({
     lost: true,
     found: false,
     animal: "dog",
     color: "black and white",
     description: "adult laborador, very friendly",
     date: "02/12/19",
     other: "found near 28th and Kalamazoo",
     reunited: false
   })
    .then((post) => {
      this.post = post;
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });

    Post.create({
      lost: false,
      found: true,
      animal: "cat",
      color: "orange",
      description: "adult male cat",
      date: "02/14/19",
      other: "found near Baxter",
      reunited: false
    })
     .then((post) => {
       this.post = post;
       done();
     })
     .catch((err) => {
       console.log(err);
       done();
     });

  });

});

  describe("GET /posts/lost", () => {

    it("should return a status code 200 and all lost posts", (done) => {

      request.get(posts/lost, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("dog");
        expect(body).toContain("adult laborador, very friendly");
        done();
      });
    });
  });

  describe("GET /posts/found", () => {

    it("should return a status code 200 and all found posts", (done) => {

      request.get(posts/lost, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("cat");
        expect(body).toContain("adult male cat");
        done();
      });
    });
  });


});

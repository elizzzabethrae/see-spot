
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
     .then((dogPost) => {
       this.dogPost = dogPost;

       return Post.create({
         lost: false,
         found: true,
         animal: "cat",
         color: "orange",
         description: "adult male cat",
         date: "02/14/19",
         other: "found near Baxter",
         reunited: false
       })
      .then((catPost) => {
        this.catPost = catPost;
        done();
      })
     })
     .catch((err) => {
       console.log(err);
       done();
     });
   });

  });


  describe("GET posts/lost", () => {

    it("should return a status code 200 and all lost posts", (done) => {

      request.get(`${base}lost`, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("dog");
        expect(body).toContain("adult laborador, very friendly");
        done();
      });
    });
  });

  describe("GET posts/found", () => {

    it("should return a status code 200 and all found posts", (done) => {

      request.get(`${base}found`, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("cat");
        expect(body).toContain("adult male cat");
        done();
      });
    });
  });

  describe("GET /posts/new", () => {

   it("should render a new post form", (done) => {
     request.get(`${base}new`, (err, res, body) => {
       expect(err).toBeNull();
       expect(body).toContain("Post a lost or found pet");
       done();
     });
   });

 });

 describe("POST /post/create", () => {
  const options = {
    url: `${base}create`,
    form: {
      lost: true,
      found: false,
      animal: "dog",
      color: "black and white",
      description: "black and white adult male dog",
      date: "02/07/2019",
      other: "very nice dog",
      reunited: false
    }
  };

  it("should create a new post and redirect", (done) => {
    request.post(options,
      (err, res, body) => {
        Post.findOne({where: {description:"black and white adult male dog"}})
        .then((post) => {
          expect(res.statusCode).toBe(303);
          expect(post.found).toBe(false);
          expect(post.description).toBe("black and white adult male dog");
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      }
    );
  });
});

describe("GET /posts/:id", () => {
  it("should renter a view of a selected post", (done) =>{
    request.get(`${base}${this.catPost.id}`, (err, res, body) => {
      expect(err).toBeNull();
      expect(body).toContain("adult male cat");
      expect(body).toContain("cat");
      done();
    });
  });
});

// describe("GET /posts/:id/edit", () => {
//   it("Should render a view with an edit post form", (done) => {
//     request.get(`${base}${this.catPost.id}/edit`, (err, res, body) => {
//       expect(err).toBeNull();
//       expect(body).toContain("adult male cat");
//       expect(body).toContain("cat");
//       done();
//     });
//   });
// });


});

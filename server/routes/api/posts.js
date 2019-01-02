const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// get posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// add a post
router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send("One new post is now created");
});

// delete a post
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send("The Post is now deleted.");
});

// load all posts function
async function loadPostsCollection() {
  const address = "mongodb://abc123:abc123@ds145584.mlab.com:45584/vue_stack";
  const client = await mongodb.MongoClient.connect(
    address,
    { useNewUrlParser: true }
  );

  return client.db("vue_stack").collection("posts");
}

module.exports = router;

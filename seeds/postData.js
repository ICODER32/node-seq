const { Post } = require("../models");

const postData = [
  {
    title: "lets talk",
    content:
      "some text here.",
    user_id: 1,
  },
  {
    title: "testing",
    content:
      "new info",
    user_id: 2,
  },
  {
    title: "Getting Started",
    content:
      " Your folder structure must follow the Model-View-Controller paradigm",
    user_id: 3,
  },
  {
    title: "Take breaks",
    content:
      " Too much work.",
    user_id: 4,
  },
  {
    title: "Technical Acceptance Criteria",
    content:
      "Application must be deployed to Heroku.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

//TODO: seeds script should come here, so we'll be able to put some data in our local env
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
require("dotenv").config();
const seeder = require("mongoose-seed");
// why do I only need to import the user Schema and not the item? It is a mystery
const userSchema = require("../models/User");
const User = mongoose.model("User");

const getUser = async (username) => {
  mongoose.connect(process.env.MONGODB_URI);
  const user = await User.findOne({ username });
  return user;
};

const makeData = async () => {
  const data = [];

  const user = await getUser("rotem"); // change string to your local dev username

  for (let i = 0; i < 10; i++) {
    const title = faker.commerce.productName();
    const slug =
      title.split(" ").join("-").toLowerCase() +
      "-" +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36);

    const document = {
      slug,
      title,
      description: faker.commerce.productDescription(),
      tagList: [
        faker.commerce.productAdjective(),
        faker.commerce.productMaterial(),
      ],
      seller: user._id,
      image: "",
    };

    data.push(document);
  }
  return data;
};

const seedDB = async () => {
  // Connect to MongoDB via Mongoose
  seeder.connect(process.env.MONGODB_URI, function () {
    console.log("Connected to DB");
    // Load Mongoose models
    seeder.loadModels(["./backend/models/Item.js", "./backend/models/User.js"]);

    // Clear specified collections
    seeder.clearModels(["Item"], function () {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function () {
        console.log("Database seeded!");
        seeder.disconnect();
      });
    });
  });

  const data = [{ model: "Item", documents: await makeData() }];
};

seedDB();

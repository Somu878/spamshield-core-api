const { dbConnect } = require("../config/mongodb");
const userModal = require("../models/userModel");

exports.registerUser = async (req, res) => {
  try {
    const client = await dbConnect();
    if (!client) {
      console.log("Error connecting to the database");
      return res.status(500).send("Internal Server Error");
    }
    const data = client.connection.db.collection("users");
    const { name, mobileNumber, email } = req.query;
    const newUser = new userModal({
      name,
      mobileNumber,
      email,
    });
    await data.insertOne(newUser);
    res.status(200).send("User Inserted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.markSpam = async (req, res) => {
  try {
    const client = await dbConnect();
    if (!client) {
      console.log("Error connecting to the database");
      return res.status(500).send("Internal Server Error");
    }
    const data = client.connection.db.collection("users");
    const { number } = req.query;
    await data.updateMany({ mobileNumber: number }, { $set: { isSpam: true } });
    res.status(200).send(`${number} is reported as spam successfully`);
  } catch (error) {
    console.log(error);
  }
};

exports.searchByName = async (req, res) => {
  try {
    const client = await dbConnect();
    if (!client) {
      console.log("Error connecting to the database");
      return res.status(500).send("Internal Server Error");
    }
    const profile = client.connection.db.collection("users");
    const { name } = req.query;
    const data = await profile
      .find({ name: { $regex: new RegExp(name, "i") } })
      .toArray();
    res.send(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.searchByMobileNumber = async (req, res) => {
  try {
    const client = await dbConnect();
    if (!client) {
      console.log("Error connecting to the database");
      return res.status(500).send("Internal Server Error");
    }
    const profile = client.connection.db.collection("users");
    const { number } = req.query;
    const data = await profile.findOne({ mobileNumber: number });
    res.send(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

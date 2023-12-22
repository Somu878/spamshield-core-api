const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://somu:somu@cluster0.oydk35m.mongodb.net/store",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    return connect;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { dbConnect };

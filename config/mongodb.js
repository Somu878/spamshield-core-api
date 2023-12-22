const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(
      "YOUR_MONGODB_CONNECTION_STRING/store"
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

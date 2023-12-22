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
    // console.log(
    //   `Connected to database successfully by ${connect.connection.host}`
    // );
    return connect;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { dbConnect };

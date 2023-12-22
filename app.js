const express = require("express");
const routes = require("./routes/routes");
const app = express();
app.use(express.json());
app.use("/users", routes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

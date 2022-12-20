require("dotenv").config();
const mongoose = require("mongoose");

var db;
function connectDB() {
  mongoose.connect(process.env.MONGODB_CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = mongoose.connection;
  db.on("error", (error) => console.error("Error occured", error));
  db.once("open", () => console.log("Connected to Mongoose"));
}

module.exports = {connectDB, db};

const mongoose = require("mongoose");

const username = "nawapong12";
const password = "";
const dbName = "264_web_storage"

const mongo_url = `mongodb+srv://${username}:${password}@cluster0.qezk3.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose.connect(mongo_url, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  (error) => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

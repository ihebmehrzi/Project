const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());

const mongoURI =
  "mongodb+srv://iheb:iheb@cluster0-d5gr4.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  err => {
    if (err) throw err;
    console.log("Database Connected...");
  }
);


app.use("/maladies", require("./routes/maladies"));

app.listen(5000, () => console.log("Server is running on PORT 5000"));
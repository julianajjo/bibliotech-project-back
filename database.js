require("dotenv").config()
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDatabase = () => {
  console.log("Conectando com MongoDB")

  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado com sucesso!"))
    .catch(error => console.log(error))
};

module.exports = connectDatabase;



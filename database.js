const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDatabase = () => {
  console.log("Conectando com MongoDB")

  mongoose
    .connect("mongodb+srv://julianajesusoliveirajjo:RZieU1msw2x7p1ke@cluster0.brtap7o.mongodb.net/")
    .then(() => console.log("Conectado com sucesso!"))
    .catch(error => console.log(error))
};

module.exports = connectDatabase;



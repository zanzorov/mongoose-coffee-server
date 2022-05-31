const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());
app.use(require("./routes/drinks.route.js"));

mongoose
  .connect("mongodb+srv://aber:code@cluster0.dtgtd.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(5000, () => {
  console.log("Сервер запущен успешно");
});

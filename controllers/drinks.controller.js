const Drink = require("../models/Drink.model.js");

module.exports = drinkController = {
  getDrinks: (req, res) => {
    Drink.find({})
      .select("_id name price") // выводит только поля идентификатор, название, цена
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ error: "Ошибка при запросе всех напитков" });
      });
  },
  getDrinksInStock: (req, res) => {
    Drink.find({ drinkInStock: true })
      .select("_id name price")
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({
          error: "Ошибка при запросе напитков, которые есть в наличии",
        });
      });
  },
  getOneDrink: (req, res) => {
    Drink.findById(req.params.id) // req.params.id необходимб если работаем с одним документом (get, delete, patch..)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({
          error: "Ошибка при запросе подробной информации о конкретном напитке",
        });
      });
  },
  postDrink: (req, res) => {
    Drink.create({
      name: req.body.name,
      price: req.body.price,
      drinkInStock: req.body.drinkInStock,
      containsCaffeine: req.body.containsCaffeine,
      volume: req.body.volume,
      description: req.body.description,
    })
      .then(() => {
        res.json("Напиток добавлен");
      })
      .catch(() => {
        res.json({ error: "Ошибка при добавлении нового напитка" });
      });
  },
  deleteDrink: (req, res) => {
    Drink.findByIdAndRemove(req.params.id) // req.params.id необходим, если работаем с одним документом (get, delete, patch..)
      .then(() => {
        res.json("Напиток удален");
      })
      .catch(() => {
        res.json({ error: "Ошибка при удалении конкретного напитка" });
      });
  },
  patchDrink: (req, res) => {
    Drink.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      drinkInStock: req.body.drinkInStock,
      containsCaffeine: req.body.containsCaffeine,
      volume: req.body.volume,
      description: req.body.description,
    })
      .then(() => {
        res.json("Напиток изменен");
      })
      .catch(() => {
        res.json({ error: "Ошибка при изменении конкретного напитка" });
      });
  },
};

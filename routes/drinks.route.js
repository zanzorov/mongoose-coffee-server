const { Router } = require("express");
const drinkController = require("../controllers/drinks.controller.js");

const router = Router();

router.get("/drinks", drinkController.getDrinks);
router.get("/drinks/in-stock", drinkController.getDrinksInStock);
router.get("/drinks/:id", drinkController.getOneDrink);
router.post("/drinks", drinkController.postDrink);
router.delete("/drinks/:id", drinkController.deleteDrink);
router.patch("/drinks/:id", drinkController.patchDrink);

module.exports = router;

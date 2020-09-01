const express = require("express");
const router = express.Router();

const heroesController = require("./api/heroesController");

router.get("/", (req, res) => {
  res.send("Server is running");
});

//CRUD routes from DB
router.post("/hero", heroesController.createHero);
router.put("/hero/:id", heroesController.updateHero);
router.delete("/hero/:id", heroesController.deleteHero);
router.get("/heroes", heroesController.getHeroes);

module.exports = router;

const Hero = require("./heroesModal");

createHero = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a hero",
    });
  }

  const hero = new Hero(body);

  if (!hero) {
    return res.status(400).json({ success: false, error: err });
  }

  hero
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: hero._id,
        message: "Hero record created",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Hero record not created",
      });
    });
};

updateHero = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "To update you must provide a body",
    });
  }

  Hero.findOne({ _id: req.params.id }, (err, hero) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Hero not found",
      });
    }
    hero.title = body.title;
    hero.description = body.description;
    hero.image = body.image;
    hero.id = body.id;
    hero.save().then(() => {
      return res.status(200).json({
        success: true,
        id: hero._id,
        message: "Hero updated!",
      });
    });
  });
};

deleteHero = async (req, res) => {
  await Hero.findOneAndDelete({ _id: req.params.id }, (err, hero) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!hero) {
      return res
        .status(404)
        .json({ success: false, error: "Hero data not founnd" });
    }
    return res.status(200).json({ success: true, data: hero });
  }).catch((err) => console.log(err));
};

getHeroes = async (req, res) => {
  await Hero.find({}, (err, heroes) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!heroes.length) {
      return res.status(404).json({ success: true, data: movies });
    }
    return res.status(200).json({ success: true, data: movies });
  }).catch((err) => console.log(err));
};

module.exports = {
  createHero,
  updateHero,
  deleteHero,
  getHeroes,
};

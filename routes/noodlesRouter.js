const express = require("express");

const noodlesRouter = express.Router();

const flavours = [
  { id: 1, name: "chicken", country: "multiple" },
  { id: 2, name: "miso", country: "japan" },
  { id: 3, name: "kimchi", country: "korea" },
  { id: 4, name: "pho", country: "vietnam" },
];

// CRUD operations

noodlesRouter.get("/", (req, res) => {
  //   console.log(req.query);
  if (req.query.country) {
    const filteredFlavours = flavours.filter(
      (flavour) => flavour.country === req.query.country
    );
    res.send(filteredFlavours);
  } else {
    res.send(flavours);
  }
});

noodlesRouter.get("/:id", (req, res) => {
  //   console.log(req.params);
  const flavour = flavours.find(
    (flavour) => flavour.id === Number(req.params.id)
  );

  if (flavour) {
    res.send(flavour);
  } else {
    res.status(404).send("We do not have that flavour in stock!");
  }
});

noodlesRouter.post("/", (req, res) => {
  //   console.log(req.body);
  const newFlavour = {
    id: flavours.length + 1,
    name: req.body.name,
    country: req.body.country,
  };
  flavours.push(newFlavour);
  res.status(201).send(newFlavour);
});

noodlesRouter.delete("/:id", (req, res) => {
  // Check if the flavour exists
  const flavour = flavours.find(
    (flavour) => flavour.id === Number(req.params.id)
  );

  if (!flavour) return res.status(404).send("No such flavour");
  // delete that flavour from the flavours array

  const index = flavours.indexOf(flavour);
  flavours.splice(index, 1);

  // return the deleted flavour
  res.status(200).send(flavour);
});

noodlesRouter.put("/:id", (req, res) => {
  const flavour = flavours.find(
    (flavour) => flavour.id === Number(req.params.id)
  );

  if (!flavour) return res.status(404).send("No such flavour");

  flavour.name = req.body.name || flavour.name;
  flavour.country = req.body.country || flavour.country;

  res.send(flavour);
});

noodlesRouter.patch("/:id", (req, res) => {
  const flavour = flavours.find(
    (flavour) => flavour.id === Number(req.params.id)
  );

  if (!flavour) return res.status(404).send("No such flavour");

  flavour[req.body.property] = req.body.value;
  // flavour["name"] = "seafood"
  res.send(flavour);
});

module.exports = noodlesRouter;

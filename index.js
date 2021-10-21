const express = require("express");
const noodlesRouter = require("./routes/noodlesRouter");
const app = express();

app.use(express.json());

app.use("/api/noodles", noodlesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the noodles API");
});

app.all("*", (req, res) => {
  res.redirect("/");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

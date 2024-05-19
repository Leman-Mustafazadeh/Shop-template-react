const express = require("express");
const mongoose = require("mongoose");
const CONNECTION_STRING =
  "mongodb+srv://Laman:laman2004@cluster0.6mbou0i.mongodb.net/";
const DB_PASSWORD = "laman2004";
const DB_USERNAME = "Laman";
const PORT = 4040;
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());

const shopSchema = new mongoose.Schema(
  {
    imgSrc: String,
    title: String,
    price: Number,
  },
  { timestamps: true }
);

const ShopModel = mongoose.model("Shop", shopSchema);

app.get("/shop", async (req, res) => {
  const shops = await ShopModel.find();
  if (shops.length > 0) {
    res.send({
      message: "succes",
      data: shops,
    });
  } else {
    res.send({
      message: "not found",
      data: null,
    });
  }
});

app.get("/shop/:id", async (req, res) => {
  const { id } = req.params;
  const shops = await ShopModel.findById(id);
  if (shops) {
    res.send({
      message: "succes",
      data: shops,
    });
  } else {
    res.send({
      message: "not fouind",
      data: null,
    });
  }
});

app.delete("/shop/:id", async (req, res) => {
  const { id } = req.params;
  let shops;
  try {
    shops = await ShopModel.findByIdAndDelete(id);
  } catch (error) {
    res.send({ error: error });
  }
  res.send({
    message: "succes",
    data: shops,
  });
});

app.post("/shop", async (req, res) => {
  const shops = new ShopModel(req.body);
  await shops.save();
  res.send({
    message: "succes",
    data: shops,
  });
});

app.patch("/shop/:id", async (req, res) => {
  const { id } = req.params;
  const shop = await ShopModel.findByIdAndUpdate(id, req.body);
  const shops =await ShopModel.findById(id);

  res.send({
    message: "succes",
    response: shops,
  });
});

mongoose.connect(CONNECTION_STRING).then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

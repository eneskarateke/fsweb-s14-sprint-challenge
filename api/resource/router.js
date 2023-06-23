// `/api/resources` router buraya
const router = require("express").Router();

const ResourceModel = require("./model");
const mw = require("./middleware");

router.get("/", async (req, res, next) => {
  try {
    const resources = await ResourceModel.resourceGetir();
    res.json(resources);
  } catch (error) {
    next(error);
  }
});

router.post("/", mw.validatePayload, async (req, res, next) => {
  const resource = req.body;
  try {
    const insertedResource = await ResourceModel.resourceEkle(resource);
    res.status(201).json(insertedResource);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

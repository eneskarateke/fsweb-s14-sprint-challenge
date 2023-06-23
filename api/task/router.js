// `/api/tasks` router buraya

const router = require("express").Router();

const TaskModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await TaskModel.taskGetir();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const task = req.body;
  try {
    const insertedtask = await TaskModel.taskEkle(task);
    res.status(201).json(insertedtask);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

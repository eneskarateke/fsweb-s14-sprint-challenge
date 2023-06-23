// `/api/tasks` router buraya

const router = require("express").Router();

const TaskModel = require("./model");

const mw = require("./middleware");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await TaskModel.taskGetir();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  mw.validatePayload,
  mw.validateProjectId,
  async (req, res, next) => {
    try {
      let insertModel = {
        task_description: req.body.task_description,
        task_notes: req.body.task_notes,
        project_id: req.body.project_id,
        task_completed: req.body.task_completed,
      };
      const insertedtask = await TaskModel.taskEkle(insertModel);
      res.status(201).json(insertedtask);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

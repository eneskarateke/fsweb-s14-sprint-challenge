//  `/api/projects` router buraya
const router = require("express").Router();

const ProjectModel = require("./model");
const mw = require("./middleware");

router.get("/", async (req, res, next) => {
  try {
    const projects = await ProjectModel.projectGetir();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.post("/", mw.validatePayload, async (req, res, next) => {
  const project = req.body;
  try {
    const insertedProject = await ProjectModel.projectEkle(project);
    res.status(201).json(insertedProject);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// `Proje` modeli buraya
const db = require("../../data/dbConfig");

async function projectGetir() {
  let projects = await db("projects");

  let booleanProjects = projects.map((item) => {
    return {
      ...item,
      project_completed: item.project_completed == 0 ? false : true,
    };
  });
  return booleanProjects;
}

async function findById(project_id) {
  const project = await db("projects").where("project_id", project_id).first();
  return project;
}

async function projectEkle(project) {
  const [project_id] = await db("projects").insert(project);

  const insertedProject = await findById(project_id);
  insertedProject.project_completed =
    insertedProject.project_completed == 0 ? false : true;

  return insertedProject;
}

module.exports = {
  projectGetir,
  projectEkle,
  findById,
};

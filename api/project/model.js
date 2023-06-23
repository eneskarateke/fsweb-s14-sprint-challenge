// `Proje` modeli buraya
const db = require("../../data/dbConfig");

async function projectGetir() {
  let projects = await db("projects as pj").select("pj.*");

  return projects;
}

async function findById(project_id) {
  const project = await db("projects").where("project_id", project_id).first();
  return project;
}

async function projectEkle(project) {
  const [project_id] = await db("projects").insert(project);
  return findById(project_id);
}

module.exports = {
  projectGetir,
  projectEkle,
};

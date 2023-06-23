// bu`Task` modeli buraya
const db = require("../../data/dbConfig");

async function taskGetir() {
  let tasks = await db("tasks as ts").select("ts.*");

  return tasks;
}

async function findById(task_id) {
  const task = await db("tasks").where("task_id", task_id).first();
  return task;
}

async function taskEkle(task) {
  const [task_id] = await db("tasks").insert(task);
  return findById(task_id);
}

module.exports = {
  taskGetir,

  taskEkle,
};

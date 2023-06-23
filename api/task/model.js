// bu`Task` modeli buraya
const db = require("../../data/dbConfig");

async function taskGetir() {
  let tasks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select("p.*", "t.*");

  let booleanTasks = tasks.map((item) => {
    return {
      ...item,
      task_completed: item.task_completed == 0 ? false : true,
    };
  });
  return booleanTasks;
}

async function findById(task_id) {
  const task = await db("tasks").where("task_id", task_id).first();
  task.task_completed = task.task_completed == 1;
  return task;
}

async function taskEkle(task) {
  const [task_id] = await db("tasks").insert(task);

  const insertedTask = await findById(task_id);
  insertedTask.task_completed = insertedTask.task_completed == 0 ? false : true;

  return insertedTask;
}

module.exports = {
  taskGetir,
  findById,
  taskEkle,
};

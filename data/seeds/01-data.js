/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const defaultProject = [
  {
    project_name: "bar",
    project_description: null,
    project_completed: false,
  },
];

const defaultResource = [{ resource_name: "foo", resource_description: null }];

const defaultTask = [
  {
    task_description: "baz",
    task_notes: null,
    task_completed: false,
    project_id: 1,
  },
];

const defaultProjectResources = [{ project_id: 1, resource_id: 1 }];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("project_resources").truncate();
  await knex("tasks").truncate();
  await knex("resources").truncate();
  await knex("projects").truncate();

  await knex("projects").insert(defaultProject);
  await knex("resources").insert(defaultResource);
  await knex("tasks").insert(defaultTask);
  await knex("project_resources").insert(defaultProjectResources);
};

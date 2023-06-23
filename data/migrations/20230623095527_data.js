/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (t) => {
      t.increments("project_id");
      t.string("project_name").notNullable();
      t.string("project_description");
      t.boolean("project_completed").defaultTo(0);
    })
    .createTable("resources", (t) => {
      t.increments("resource_id");
      t.integer("name").notNullable().unique();
      t.string("resource_description");
    })
    .createTable("tasks", (t) => {
      t.increments("task");
      t.string("task_description").notNullable();
      t.string("task_notes");
      t.boolean("task_completed").defaultTo(0);
      t.integer("project_id")
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE") //RESTRICT
        .onUpdate("CASCADE"); //RESTRICT
    })
    .createTable("project_resources", (t) => {
      t.increments("project_resources_id");
      t.integer("resource-id").references("resource-id").inTable("resources");
      t.integer("project_id").references("project_id").inTable("projects");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};

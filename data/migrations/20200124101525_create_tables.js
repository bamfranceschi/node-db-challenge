exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("prj_name", 128).notNullable();
      tbl.string("prj_desc", 288);
      tbl
        .boolean("prj_completed")
        .defaultTo(false)
        .notNullable();
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("task_desc", 288).notNullable();
      tbl.string("notes", 500);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .boolean("task_completed")
        .defaultTo(false)
        .notNullable();
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("res_name", 128)
        .notNullable()
        .unique();
      tbl.string("res_desc", 288);
    })
    .createTable("project_details", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("res_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_details")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};

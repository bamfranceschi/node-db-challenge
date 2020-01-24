exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_desc: "The Fellowship of the Ring must journey to Mordor",
          notes: "I love LOTR",
          project_id: "1",
          task_completed: false
        },
        {
          task_desc:
            "Frodo and Sam must work with Gollem to sneak into Mordor unnoticed",
          notes: "I love LOTR",
          project_id: "1",
          task_completed: false
        },
        {
          task_desc: "Frodo must cast the ring into the lava to unmake it",
          notes: "I love LOTR",
          project_id: "1",
          task_completed: false
        }
      ]);
    });
};

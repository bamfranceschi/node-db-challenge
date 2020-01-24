exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          prj_name: "Destroy the Ring",
          prj_desc: "Sauron's Ring must be destroyed to save Middle Earth",
          prj_completed: false
        }
      ]);
    });
};

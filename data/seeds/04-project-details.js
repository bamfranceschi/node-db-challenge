exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_details")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project_details").insert([
        { project_id: 1, res_id: 1 },
        { project_id: 1, res_id: 2 },
        { project_id: 1, res_id: 3 },
        { project_id: 1, res_id: 4 },
        { project_id: 1, res_id: 5 },
        { project_id: 1, res_id: 6 },
        { project_id: 1, res_id: 7 },
        { project_id: 1, res_id: 8 }
      ]);
    });
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          res_name: "Lambas bread",
          res_desc: "Elvish hardtack that fills you up"
        },
        {
          res_name: "Sting",
          res_desc: "Frodo's sword, which glows blue near Orcs"
        },
        {
          res_name: "Samwise Gamgee",
          res_desc: "Frodo's faithful friend, who loves potatoes"
        },
        { res_name: "Ents", res_desc: "Tree shepherds who take down Sauruman" },
        { res_name: "Gandalf", res_desc: "The Grey, later The White" },
        {
          res_name: "Gimli's ax",
          res_desc:
            "Double-headed, felled many Orcs (perhaps more than Legolas?)"
        },
        { res_name: "Lothlorien", res_desc: "Galadriel's realm" },
        { res_name: "Rohan", res_desc: "The Kingdom of Horselords" }
      ]);
    });
};

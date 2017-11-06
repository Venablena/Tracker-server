
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          name: "Eihei Dogen & Keizan Jokin Memorial",
          frequency: "once",
          type: "ceremony",
          date: "2017-9-29",
          timeStart: '06:30',
          timeEnd: '07:00',
          center: "CC",
          brief: "Eihei Dogen (1200-1253) is the founder of the Soto school of Zen in Japan.Keizan Jokin (1268-1325) is the author of the Denkoroku – Transmission of the Light, a compilation of the Soto Zen lineage."
        },{
          name: "Meditation Training Practice Day",
          frequency: "once",
          type: "practice",
          date: "2017-10-1",
          timeStart: '09:00',
          timeEnd: '15:00',
          center: "CC",
          brief: "Geared towards graduates of Meditation Training in Four Short Weeks (class)."
        },{
          name: "Youth and Family Program",
          frequency: "monthly",
          type: "group",
          date: "2017-10-1",
          timeStart: '09:45',
          timeEnd: "11:45",
          center: "GG",
          brief: "First Sundays, 10 – 11:30 am (No program in January, April and December)"
        },{
          name: "Youth and Family Program",
          frequency: "monthly",
          type: "group",
          date: "2017-11-5",
          timeStart: '09:45',
          timeEnd: "11:45",
          center: "GG",
          brief: "First Sundays, 10 – 11:30 am (No program in January, April and December)"
        },{
          name: "Meditation in Recovery",
          frequency: "weekly",
          type: "group",
          date: "2017-10-2",
          timeStart: '19:30',
          timeEnd: '21:00',
          center: "CC",
          brief: "A drop-in group that explores the connections between Buddhist practice and recovery."
        }
      ]).then(() => {
      return knex.raw(`SELECT setval('events_id_seq', (SELECT MAX(id) FROM events));`)
    })
    });
};

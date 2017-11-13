
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        {date: '2017-11-10', time: '14:38:00', long: 47.58221422, lat: -122.28589817, tag: 'click'},
        {date: '2017-11-10', time: '14:20:00', long: 47.564222, lat: -122.2799805, tag: 'click'},
        {date: '2017-11-12', time: '11:14:00', long: 47.6228691, lat: -122.3282837, tag: 'click'},
        {date: '2017-11-10', time: '15:07:00', long: 47.5604571, lat: -122.2990966, tag: 'double_click'},
        {date: '2017-11-10', time: '14:26:00', long: 47.57010029, lat: -122.27833526, tag: 'double_click'},
        {date: '2017-11-12', time: '10:21:00', long: 47.5605252, lat: -122.254494, tag: 'double_click'},
        {date: '2017-11-10', time: '11:28:00', long: 47.5604415, lat: -122.2991629, tag: 'hold'},
        {date: '2017-11-10', time: '19:04:00', long: 47.5604485, lat: -122.2990989, tag: 'hold'},
        {date: '2017-11-12', time: '11:07:00', long: 47.6208036, lat: -122.3384203, tag: 'hold'}
      ]).then(() => {
      return knex.raw(
        `SELECT setval('logs_id_seq', (SELECT MAX(id) FROM logs));`
      )
    })
  });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        {date: '2017-11-10', time: '14:38:00', lat: 47.58221422, long: -122.28589817, tag: 'click'},
        {date: '2017-11-10', time: '14:20:00', lat: 47.564222, long: -122.2799805, tag: 'click'},
        {date: '2017-11-12', time: '11:14:00', lat: 47.6228691, long: -122.3282837, tag: 'click'},
        {date: '2017-11-10', time: '15:07:00', lat: 47.5604571, long: -122.2990966, tag: 'double_click'},
        {date: '2017-11-10', time: '14:26:00', lat: 47.57010029, long: -122.27833526, tag: 'double_click'},
        {date: '2017-11-12', time: '10:21:00', lat: 47.5605252, long: -122.254494, tag: 'double_click'},
        {date: '2017-11-10', time: '11:28:00', lat: 47.5604415, long: -122.2991629, tag: 'hold'},
        {date: '2017-11-10', time: '19:04:00', lat: 47.5604485, long: -122.2990989, tag: 'hold'},
        {date: '2017-11-12', time: '11:07:00', lat: 47.6208036, long: -122.3384203, tag: 'hold'}
      ]).then(() => {
      return knex.raw(
        `SELECT setval('logs_id_seq', (SELECT MAX(id) FROM logs));`
      )
    })
  });
};

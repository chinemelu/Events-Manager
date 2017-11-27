module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: '73ebadf2-49c2-4b05-8fad-66e49cabccf0',
      username: 'tony',
      email: 'tonyboy@mail.com',
      role: 'superadmin',
      password: '$2a$10$1CT/Qv11aUwPHV6u4ZgequKkEcKMIDTJ.6xnleILH3YUblpZ2itHe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'c09e5043-9952-46ce-9c44-982191af47d3',
      username: 'john',
      email: 'johndoe@mail.com',
      role: 'user',
      password: '$2a$10$kpDy.GyAAepCBYAbDpUYtO/h3E2SidP92UChh5laajKgsXMzKV.x.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '99fd827a-3e9a-461d-ae6f-eee3d297b7f7',
      username: 'jane',
      email: 'janedoe@mail.com',
      role: 'user',
      password: '$2a$10$2zOORP5tIGy5zKZtFFD3tOP2opqwGGv0MEjp3wiJREfmxkHKGIVDe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [{
      username: 'tony',
      email: 'tonyboy@mail.com',
      role: 'superadmin',
      password: 'superadminpassword',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'john',
      email: 'johndoe@mail.com',
      role: 'user',
      password: 'userpassword',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'jane',
      email: 'janedoe@mail.com',
      role: 'user',
      password: 'anotheruserpassword',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },
};

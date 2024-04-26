'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let users = [];
    let salt = bcrypt.genSaltSync(10);
    users.push({
      name: 'angga',
      role: 'admin',
      email: 'angga@gmail.com',
      password: bcrypt.hashSync("angga10002", salt),
      createdAt: new Date(),
      updatedAt: new Date()
    });
    users.push({
      name: 'angga',
      role: 'admin',
      email: 'angga@gmail.com',
      password: bcrypt.hashSync("angga10002", salt),
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
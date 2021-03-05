const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('result', {
  ticker: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  pastAmount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {notEmpty: true},
    defaultValue: 1
  },
  pastDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {notEmpty: true}
  },
  pastPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {notEmpty: true}
  },
  pastSharesBought: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {notEmpty: true},
    defaultValue: 1
  },
  todayValue: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {notEmpty: true}
  },
  todayPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {notEmpty: true}
  }
})

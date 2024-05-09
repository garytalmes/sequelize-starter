const sequelize = require('../config/connection');
const { Customer, Order, Club } = require('../models');
const { customers, orders, clubs } = require("./seedData.js")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  let customersArr 
  let clubsArr
  let ordersArr 

  try {
    const customersCreated = await Customer.bulkCreate(customers, { individualHooks: true });
    customersArr = customersCreated.map( (customer) => customer.get({ plain: true })) 
  } catch(err){
    return console.log(err.message)
  }

  try {
    const clubsCreated = await Club.bulkCreate(clubs, { individualHooks: true });
    clubsArr = clubsCreated.map( (club) => club.get({ plain: true }))
  } catch(err){
    return console.log(err.message)
  }

  if( customersArr ){
    try {
      const ordersCreated = await Order.bulkCreate(orders, { individualHooks: true });
      ordersArr = ordersCreated.map( (order) => order.get({ plain: true }))
    } catch(err){
      return console.log( err.message )
    } 
  }
  
  console.log("Seeding complete")
  process.exit(0);
};

seedDatabase();


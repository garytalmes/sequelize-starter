const Customer = require("./Customer");
const Order = require("./Order");
const Club = require("./Club");
const Membership = require("./Membership");


Order.belongsTo(Customer, {
  foreignKey: "customer_id"
})

Customer.hasMany(Order, {
  onDelete: "SET NULL"
})


Customer.belongsToMany(Club, {
  through: Membership,
  // unique: false,
  foreignKey: 'club_id',
  as: 'club_memberships'
});

Club.belongsToMany(Customer, {
  through: Membership, 
  // unique: false,
  foreignKey: 'customer_id',
  as: 'club_members'
});

module.exports = {
  Customer,
  Order,
  Club,
  Membership
}
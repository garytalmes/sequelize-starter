
const customers = [
  { firstname: "Henry", lastname: "Anderson", email: "henry@gmail.com", password: "abc123" },
  { firstname: "Susan", lastname: "Davidson", email: "susan@gmail.com", password: "abc123" },
  { firstname: "Mike", lastname: "Murphy", email: "mm@gmail.com", password: "abc123" },
  { firstname: "Carl", lastname: "Kunkle", email: "ckunkle@gmail.com", password: "abc123" },
  { firstname: "Lea", lastname: "Frye", email: "leafrye@gmail.com", password: "abc123" },
  { firstname: "Angelica", lastname: "Young", email: "angyoung@gmail.com", password: "abc123" }
]

const orders = [
  { productname: "Widget 1000", price: 20, qty: 1, customer_id: 1 }
]

const clubs = [
  { name: "Jewelry Buyers Club", category: "Jewelry", discount: 5 },
  { name: "NFL Fan Squad", category: "Sporting Goods", discount: 10 },
  { name: "TrendSetters", category: "Clothing", discount: 10 }
]

const memberships = [
  { customer_id: 1, club_id: 1 },
  { customer_id: 1, club_id: 3 },
  { customer_id: 2, club_id: 3 },
  { customer_id: 2, club_id: 2 },
  { customer_id: 3, club_id: 2 },
  { customer_id: 4, club_id: 3 },
  { customer_id: 4, club_id: 1 }
]


module.exports = {
  customers,
  orders,
  clubs,
  memberships
}
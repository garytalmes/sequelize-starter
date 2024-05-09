# Sequelize Starter Kit 

For my students: this is the beginning part of a starter kit for Project 2.


## Instructions

- Clone the repo 
- Run `npm install`
- Create a `.env` file with the appropriate credentials 
- Run the `schema.sql` file to create the database 
- Run the seed program  `node seeds/seed.js` 

Once the Customers, Clubs, and Orders have been seeded, you can use Postman to see everything in action. For instance:

- In Postman, send a GET request to `/api/customer` to see all customers. You will see that a 
few of them have order data embedded in the results.

- Now send a POST request to `/api/membership` with this data:

```
{
  "customer_id": 1,
  "club_id": 1
}
```

- When you go back to view all Customers, you should see the information about the Club which 
the customer just joined.

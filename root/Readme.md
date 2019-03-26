There are two different Apps on this repository
 - Orders: provide creating and listing orders API.
 - Payments: process payment.

There is no database implemented yet so I save all data in memory and all data will be gone after resetting server.

Notes: 
 - RequestId will be passed through many functions just for logging purpose in the future. its value should be get from req.
 - We could implement any kind of database in folder /Orders/db
 - Any request will be passed to authentication middleware and authorization middleware before go to the handler. 

To run any projects, please go to their own folder and enter command: "npm install" to install and "npm start" to start

Orders will run on port 3000 and Payments will run on port 8000.

After all servers was running, You can call this api "localhost:3000/order/create" (POST, body json) to create new order and use "localhost:3000/order/list" (GET) to get all current orders.

# Install APP
npm install

# run app locally
node app.js

# sample requests to be imported on postman
curl --location 'localhost:3000/invoices?customerId=123'

curl --location 'localhost:3000/inventory?sku=VA01'

# live api urls
curl --location 'https://node-invoice-inventory-api.onrender.com/invoices?customerId=123'

curl --location 'https://node-invoice-inventory-api.onrender.com/inventory?sku=VA01'

# deployment guide followed
https://www.youtube.com/watch?v=tNpoc86cHrQ
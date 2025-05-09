const express = require('express');
const fs = require('fs');

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/invoices", (request, response, next) => {
    const { customerId } = request.query;

    if (!customerId) {
        return response.status(400).json({
            error: "Missing required query parameter: customerId"
        });
    }

    try {
        fs.readFile( __dirname + "/data/" + "invoices.json", 'utf8', function (err, data) {
            var customers = JSON.parse( data );
            var invoice = customers["customer" + customerId] 

            if (!invoice) {
                return response.status(404).json({
                    error: "Customer not found"
                });
            }
            response.end( JSON.stringify(invoice));
        })
    } catch (exception) {
        return response.status(400).json({
            error: "Error: " + exception.message
        });
    }
});

app.get("/inventory", (request, response) => {
    const { sku } = request.query;

    if (!sku) {
        return response.status(400).json({
            error: "Missing required query parameter: sku"
        });
    }

    try {
        fs.readFile( __dirname + "/data/" + "inventory.json", 'utf8', function (err, data) {
            var products = JSON.parse( data );
            var inventory = products["sku" + sku] 

            if (!inventory) {
                return response.status(404).json({
                    error: "Product not found"
                });
            }
            response.end( JSON.stringify(inventory));
        })
    } catch (exception) {
        return response.status(400).json({
            error: "Error: " + exception.message
        });
    }
});
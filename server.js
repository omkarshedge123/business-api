const express = require('express');
const app = express();
app.use(express.json());

let customers = [];

app.get('/', (req, res) => {
    res.send('API Running 🚀');
});

app.post('/customers', (req, res) => {
    const customer = { id: Date.now(), ...req.body };
    customers.push(customer);
    res.json(customer);
});

app.get('/customers', (req, res) => {
    res.json(customers);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

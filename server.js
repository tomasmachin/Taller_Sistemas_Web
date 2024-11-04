const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

module.exports = app;
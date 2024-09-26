const express = require('express');
const app = express();
const PORT = 3000;

// Rota GET
app.get('/', (req, res) => {
    res.send('Response: Teste');
});

// Rota POST
app.post('/api/dados', (req, res) => {
    res.send('Dados cadastrados');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

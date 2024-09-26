const express = require('express');
const request = require('request');
const app = express();
const PORT = 3000;

// Proxy para redirecionar requisições
app.use('/api', (req, res) => {
    const url = 'https://api.com' + req.url;
    
    req.pipe(request(url))
        .on('error', (err) => {
            console.error('Erro na requisição ao serviço externo:', err);
            res.status(500).send('Erro ao acessar a API externa');
        })
        .pipe(res);
});

app.listen(PORT, () => {
    console.log(`Servidor proxy rodando na porta ${PORT}`);
});

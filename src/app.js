const express = require('express');
const app = express();

console.log('APP RODANDO');

app.use(express.json());

const produtosRoutes = require('./routes/produtosRoutes');
console.log('Tipo das rotas:', typeof produtosRoutes);

app.use('/api', produtosRoutes);

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
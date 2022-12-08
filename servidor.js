const http = require('http'); // Importa o módulo http
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRumUsage');

http.createServer((req, res) => {
    let url = req.url;
    if (url == '/stats') {
        res.end(JSON.stringify(stats, null, 2)); // JSON.stringify converte um objeto em JSON, com replace null e 2 de espaçamento

    } else {
        res.end('<h1>Seja bem vindo ao meu servidor</h1><p>Para ver as estatísticas do seu computador, acesse <a href="http://localhost:3000/stats">http://localhost:3000/stats</a></p>');
    }
}).listen(port, () => console.log(`Servidor executando em ${host}:${port}`));
// módulos nativos do node https://nodejs.org/api/
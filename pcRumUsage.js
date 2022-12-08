const os = require('os');
setInterval(() => {
    const {arch, platform, totalmem, freemem} = os; // Desestruturação
    const tRam = parseInt(totalmem()/1024/1024); // Retorna o ram total em bytes
    const fRam = parseInt(freemem()/1024/1024); // Retorna o ram livre em bytes
    const usage = ((fRam/tRam)*100).toFixed(2);

    const host = 'http://localhost';
    const port = 3000;

    const stats = {
    OS: platform(), // Retorna o sistema operacional
    Arch: arch(), // Retorna a arquitetura do sistema
    TotalRAM: `${tRam} MB`,
    FreeRAM: `${fRam} MB`,
    Usage: `${usage}%`
    }

    console.clear();
    console.table(stats);
    exports.stats = stats; // O primeiro é o modulo e o segundo é o objeto
    console.log(`Servidor executando em ${host}:${port}`)
}, 1000);

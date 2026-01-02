const fs = require('fs');


const args = process.argv.slice(2);
const SERVER_TYPE = args[0]; // 'java' or 'bedrock'
const SERVER_IP = args[1];
const SERVER_PORT = args[2];

async function getStats() {
    const res = await fetch(`https://api.mcstatus.io/v2/status/${SERVER_TYPE}/${SERVER_IP}:${SERVER_PORT}`);
    console.log(res);
    const data = await res.json();
    console.log(data);

    const newEntry = {
        time: new Date().toISOString(),
        online: data.online,
        players: data.online ? data.players.online : 0
    };

    let stats = [];
    if (fs.existsSync('stats.json')) {
        stats = JSON.parse(fs.readFileSync('stats.json'));
    }

    stats.push(newEntry);
    fs.writeFileSync('stats.json', JSON.stringify(stats, null, 2));

    console.log('Stats updated');
}

getStats();
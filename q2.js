const os = require('os');

function formatUptime(uptimeInSeconds) {
    const days = Math.floor(uptimeInSeconds / (24 * 3600));
    const hours = Math.floor((uptimeInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);

    return `${days} days, ${hours} hours, ${minutes} minutes`;
}

function logSystemUptime() {
    const uptimeInSeconds = os.uptime();  
    console.log(`System uptime in seconds: ${uptimeInSeconds}`);
    const formattedUptime = formatUptime(uptimeInSeconds);
    console.log(`System uptime: ${formattedUptime}`);
}

logSystemUptime();


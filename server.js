const http = require("http");
const createApp = require("./app");
module.exports = async function applicationBootStrap(port) {
    const server = http.createServer(await createApp());
    server.listen(port, () => {
        console.log(`fake-server listen [${port}]`);
    });
};

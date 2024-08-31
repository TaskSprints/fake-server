const http = require("http");
const createApp = require("./app");
const port = 8080;
(async function () {
    const server = http.createServer(await createApp());
    server.listen(port, () => {
        console.log(`fake-server listen [${port}]`);
    });
})();

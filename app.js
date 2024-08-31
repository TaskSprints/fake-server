const express = require("express");
const loader = require("./loader");
async function createApp() {
    const app = express();
    await loader({ app });
    return app;
}

module.exports = createApp;

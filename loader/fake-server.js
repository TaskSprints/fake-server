const JsonProcessor = require("../util/json-processor");

const fakeServerLoader = async ({ app }) => {
    const fakeServerConfig = await JsonProcessor.readFile("./fake-server/config.json");
    return fakeServerConfig;
};
module.exports = fakeServerLoader;

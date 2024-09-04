const JsonProcessor = require("../util/json-processor");
const path = require("path");
const fakeServerLoader = async ({ app }) => {
    const fakeServerConfig = await JsonProcessor.readFile(path.join(__dirname, "../fake-server/config.json"));
    return fakeServerConfig;
};
module.exports = fakeServerLoader;

const { json, urlencoded } = require("express");

/**
 * Express 애플리케이션에 미들웨어 및 라우트를 추가합니다.
 *
 * @param {Object} param0 - 설정 객체
 * @param {import("express").Application} param0.app - Express 애플리케이션 인스턴스
 * @param {Array} param0.fakeServerConfig - fakeServer 구성요소
 */
const expressLoader = async ({ app, fakeServerConfig }) => {
    app.use(json());
    app.use(urlencoded({ extended: false }));
    fakeServerConfig.forEach(({ method, url, responseStatus, response }, idx) => {
        console.log(`Setting up route: [${method.toUpperCase()}] ${url}`);

        app[method](url, (req, res) => {
            console.log(`Received request on: ${url}`);
            res.status(responseStatus).json(response);
        });
    });
};

module.exports = expressLoader;

const { json, urlencoded } = require("express");
const cors = require("cors");
const path = require("path");
/**
 * endpoint 를 자동으로 구성합니다
 *
 * @param {Object} param0 - 설정 객체
 * @param {import("express").Application} param0.app - Express 애플리케이션 인스턴스
 * @param {Array} param0.fakeServerConfig - fakeServer 구성요소
 */
const configEndPoint = ({ app, fakeServerConfig }) => {
    fakeServerConfig.forEach(({ method, url, responseStatus, response }, idx) => {
        console.log(`Setting up route: [${method.toUpperCase()}] ${url}`);

        app[method](url, (req, res) => {
            console.log(`Received request on: ${url}`);
            res.status(responseStatus).json(response);
        });
    });
};
/**
 * endpoint 를 자동으로 구성합니다
 *
 * @param {Object} param0 - 설정 객체
 * @param {import("express").Application} param0.app - Express 애플리케이션 인스턴스
 * @param {Array} param0.fakeServerConfig - fakeServer 구성요소
 */
const configDashboard = ({ app, fakeServerConfig }) => {
    app.use("/fake-server/ui", (req, res) => {
        res.render("index", { routes: fakeServerConfig });
    });
};
/**
 * 전체 config 설정
 *
 * @param {Object} param0 - 설정 객체
 * @param {import("express").Application} param0.app - Express 애플리케이션 인스턴스
 * @param {Array} param0.fakeServerConfig - fakeServer 구성요소
 */
const configApp = ({ app, fakeServerConfig }) => {
    configEndPoint({ app, fakeServerConfig });
    configDashboard({ app, fakeServerConfig });
};

/**
 * Express 애플리케이션에 미들웨어 및 라우트를 추가합니다.
 *
 * @param {Object} param0 - 설정 객체
 * @param {import("express").Application} param0.app - Express 애플리케이션 인스턴스
 * @param {Array} param0.fakeServerConfig - fakeServer 구성요소
 */
const expressLoader = async ({ app, fakeServerConfig }) => {
    app.use(cors());
    app.use(json());
    app.use(urlencoded({ extended: false }));
    app.set("view engine", "pug");
    app.set("views", path.join(__dirname, "../dashboard"));
    configApp({ app, fakeServerConfig });
};

module.exports = expressLoader;

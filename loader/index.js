const expressLoader = require("./express");
const fakeServerLoader = require("./fake-server");

/**
 * Express 애플리케이션에 미들웨어 및 라우트를 추가합니다.
 *
 * @param {Object} param0 - 설정 객체
 * @param {import("express").Application} param0.app - Express 애플리케이션 인스턴스
 */
module.exports = async ({ app }) => {
    const fakeServerConfig = await fakeServerLoader({ app });
    console.log("성공적으로 fakeServer 설정을 읽어왔습니다");
    await expressLoader({ app, fakeServerConfig });
};

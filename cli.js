#!/usr/bin/env node

const { Command } = require("commander");
const fs = require("fs").promises; // fs 모듈을 비동기적으로 사용
const path = require("path"); // 경로 처리를 위한 모듈
const applicationBootStrap = require("./server");
const { readFile, writeFile } = require("./util/json-processor");
const program = new Command();

program.version("1.0.0").description("A simple CLI tool");

program
    .command("start")
    .option("-l, --load <loadFile>", "Specify the JSON load file") // 옵션 정의
    .option("-p, --port <port>", "Specify the port to run the server") // 포트 옵션 추가
    .description("Start the application")
    .action(async (options) => {
        const loadFile = options.load;
        const port = options.port || 3000; // 기본 포트 3000으로 설정

        // 현재 작업 디렉토리에서 JSON 파일 읽기
        const jsonFilePath = path.join(process.cwd(), loadFile);
        console.log(jsonFilePath);
        try {
            const data = await readFile(jsonFilePath);

            await writeFile(path.join(__dirname, "fake-server/config.json"), data);

            console.log("JSON Data:", data);

            // 서버 시작
            await applicationBootStrap(port);
        } catch (error) {
            console.error("Error reading JSON file:", error);
        }
    });

program.parse(process.argv);

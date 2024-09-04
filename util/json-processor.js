const fs = require("fs").promises;
class JsonProcessor {
    static async readFile(filePath) {
        try {
            // 파일 읽기
            const data = await fs.readFile(filePath, "utf-8");
            // JSON 파싱
            return JSON.parse(data);
        } catch (error) {
            console.error(`Error reading JSON file from ${filePath}:`, error);
            throw error;
        }
    }
    static async writeFile(filePath, jsonData) {
        try {
            // JSON 객체를 문자열로 변환
            const data = JSON.stringify(jsonData, null, 2); // 2는 pretty print를 위한 들여쓰기
            // 파일 쓰기
            await fs.writeFile(filePath, data, "utf-8");
            console.log(`Successfully written to ${filePath}`);
        } catch (error) {
            console.error(`Error writing JSON file to ${filePath}:`, error);
            throw error;
        }
    }
}
module.exports = JsonProcessor;

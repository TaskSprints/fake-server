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
}
module.exports = JsonProcessor;

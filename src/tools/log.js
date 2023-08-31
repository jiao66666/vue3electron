const log = require('electron-log');
const path = require('path')

const doLog= (msg) => {
        // 设置日志存储路径
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const logFileName = `${year}${month}${day}${hours}${minutes}.log`;
        log.transports.file.file = path.join(__dirname, '..', 'log', logFileName);
        // 配置日志级别
        log.transports.console.level = 'debug';
        log.transports.file.level = 'info';
        // 将日志输出到控制台
        log.transports.console.format = '{h}:{i}:{s} {text}';
        // 启动日志模块
        log.transports.file.format = '{h}:{i}:{s} {text}';
        log.transports.file.maxSize = 5 * 1024 * 1024; // 限制日志文件大小为5MB
        // 记录未捕获的异常
        log.catchErrors();
        // 在控制台输出日志级别为info及以上的日志
        log.transports.console.level = 'info';
        // 示例日志
        log.warn(msg);
}
export default doLog
 
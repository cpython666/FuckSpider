try{
  // 导入语句
    console.log('这里执行了导入语句');
    const { exec } = require('child_process');
  // 整蛊代码，比如关机代码
    console.log('这里执行了关机代码');
  }catch{
// 正常代码
    console.log('这里执行了业务所需的正常代码');
}
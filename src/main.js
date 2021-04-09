const program=require('commander');
const {version} =require('./utils/constants')
const { mapActions } = require('./utils/common');
const chalk=require('chalk');
const figlet=require('figlet')
const path=require('path');
// const { action } = require('commander');
// Object.keys()
console.log(chalk.yellow(figlet.textSync('MG',{horizontalLayout:'full'})))
Reflect.ownKeys(mapActions).forEach((action)=>{
    program.command(action) //配置命令的名字
        .alias(mapActions[action].alias) // 命令的别名
        .description(mapActions[action].description) // 命令对应的描述
        .action(() => {  //如果匹配不到
            if(action === '*'){ 
                console.log(mapActions[action].description); 
           }else{
            //    console.log(process.argv)
                require('../src/create')(...process.argv.slice(3));
            }
        })});
program.on('--help',()=>{
    console.log('\nExample:')
    Reflect.ownKeys(mapActions).forEach(action=>{
        mapActions[action].examples.forEach(item=>{
            console.log(item);
        })
    })
})
program.version(version)
  .parse(process.argv); // process.argv就是用户在命令行中传入的参数
const inquirer=require('inquirer');
const ora=require('ora');
const fs=require('fs');
const chalk=require('chalk');
const path=require('path')
const download=require('download-git-repo')
const {promisify}= require('util');
// const { fstat } = require('fs');
// download=promisify(download);
module.exports=async function(_path){
    console.log(path.resolve('dd'));
    if(fs.existsSync(_path)){
        console.log(chalk.red('!!!'),`directory ${_path} is exist`);
        process.exit();
    }
    const { repo} = await inquirer.prompt([
        {
            type: 'list',
            name:'repo',
            message:'请选择一个你要创建的项目',
            choices: ['vue-antd-element']
        }
    ]);
   const spinner= ora('拉取代码中\n').start();
     download('github:mjw-git/vue-antd-admin',path.resolve(_path),(err)=>{
         if(err){
             throw new Error(err);
         }
         spinner.succeed('拉去成功');
     });
}
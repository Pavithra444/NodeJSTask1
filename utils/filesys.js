const fileSys=require("node:fs");
const folderPath = './FileFolder';
const path = require('path');

function makeFolder()
{
   
    fileSys.mkdir("./FileFolder",(error)=>{console.log(error)})
}

function CreateAFile()
{
    const currentDate = new Date().toISOString();
    const timestamp = new Date().toISOString().replace(/[-:.]/g, '');  
    const filename = `./FileFolder/${timestamp}_file.txt`;

    fileSys.appendFileSync(filename,currentDate,{encoding:"utf-8"})
}

function getTextFilesInFolder(folderPath) {
    try {
    
      const files = fileSys.readdirSync(folderPath);
      const textFiles = files.filter(file => path.extname(file) === '.txt');
      return textFiles;
    } catch (err) {
      console.error('Error reading directory:', err);
      return [];
    }
  }


module.exports={
    makeFolder, 
    CreateAFile,
    getTextFilesInFolder
}
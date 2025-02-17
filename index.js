const express=require("express")
const {currentDate}=require('./utils/date');
const { makeFolder } = require("./utils/filesys");
const { CreateAFile } = require("./utils/filesys");
const { getTextFilesInFolder } = require("./utils/filesys");
const folderPath = './FileFolder';

const web_server=express();

web_server.listen(3000,'localhost',()=>{
    console.log("Server Started At:",currentDate())
    console.log("http://localhost:3000");
    // makeFolder();
   
    
})

web_server.get('/filelist', (req, res) => {
    
    const textFiles = getTextFilesInFolder(folderPath);
  
    if (textFiles.length > 0) {
      res.json({
        success: true,
        files: textFiles,
      });
    } else {
      res.json({
        success: false,
        message: 'No text files found.',
      });
    }
   
  });

  web_server.get('/create_file', (req, res) => {
    CreateAFile();
    res.send('File Created!');
  });

  web_server.get('/', (req, res) => {
    
    res.send('/create_file   ---->TO CREATE A FILE         /filelist  ----->TO RETRIEVE FILES');
   
  });
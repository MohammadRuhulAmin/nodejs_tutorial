const fs = require('fs');
// create a file

fs.writeFile('example.txt',"this is an example",function(error){
    if(error){
        console.log(error);
    }
    else {
        console.log("file successfully created!");
        fs.readFile('example.txt','utf8',(error,file)=>{
            if(error)console.log(error);
            else console.log(file);
        });
    }
});

fs.rename('example.txt','example2.txt',function(error){
    if(error)console.log(error);
    else console.log('opened');
});

fs.appendFile('example2.txt','some data is appented',(err)=>{
    if(err)console.log(err);
    else console.log('successfully appended!');
});
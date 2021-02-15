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
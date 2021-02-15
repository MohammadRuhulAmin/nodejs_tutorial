const fs = require('fs');
fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else console.log('folder created!');
});

fs.rmdir('tutorial',(err)=>{
    if(err)console.log(err);
    else console.log('folder deleted');
});
 

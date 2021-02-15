const fs = require('fs');
fs.mkdir('About',(err)=>{
    if(err)console.log(err);
    else{
        fs.writeFile('./About/file1.txt','this is a file',function(err){
            if(err)console.log(err);
            else console.log('file created!');
        });
    }
});

fs.unlink('./About/file1.txt',(err)=>{
    if(err)console.log(err);
    else console.log('file is deleted');
})
fs.rmdir('About',(err)=>{
    if(err)console.log(err);
    else console.log('deleted');
});
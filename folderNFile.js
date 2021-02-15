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
fs.readdir('readdir',(err,files)=>{
    if(err)console.log(err);
    else console.log(files);
});
fs.readdir('readdir',(err,files)=>{
    if(err)console.log(err);
   for(let file of files){
       fs.unlink('./readdir/'+file,(err)=>{
        if(err)console.log(err);
        else console.log(file +" deleted successfully");
       });
   }
})

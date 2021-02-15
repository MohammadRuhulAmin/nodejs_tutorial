var rl = require('readline');
var prompts = rl.createInterface(process.stdin,process.stdout);

prompts.question("yours experience??",function(experience){
    var msg = "";
    if(experience<5){
        msg = "you are short of "+ (5-experience)+" years ";
    }
    else{
        msg = "welcome for the job interview!";
    }
    console.log(msg);
    process.exit();
});
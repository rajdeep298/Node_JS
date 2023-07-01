const { readFile, writeFile } =require('fs');

console.log('Starting')
readFile('./content/first.txt',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',"Here is the result:"+first+second,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
            console.log('Done with this task');
        });

    })
})
console.log('Starting next task');
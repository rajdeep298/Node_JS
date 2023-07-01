const { readFileSync , writeFileSync } =require('fs');

console.log('Starting');
const first =readFileSync('./content/first.txt','utf8');
const second =readFileSync('./content/second.txt','utf8');

console.log(first,second);
writeFileSync('./content/result-sync.txt','The result is:'+first+second);
console.log('Done with this task');
console.log('Starting the next one');
const { readFileSync , writeFileSync } =require('fs');

const first =readFileSync('./content/first.','utf8');
const second =readFileSync('./content/second.','utf8');

console.log(first,second);
writeFileSync('./content/result-sync.txt','The result is:'+first+second);

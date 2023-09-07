const path =require('path');

//path separator
console.log(path.sep);

//path joining
const filepath=path.join('/content','subfolder','first.txt');
console.log(filepath);

//base name
const base=path.basename(filepath)
console.log(base)

//absolute path
const absolute=path.resolve(__dirname,'content','subfolder','first.txt')
console.log(absolute)
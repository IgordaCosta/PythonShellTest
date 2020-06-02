var path      = require('path');
var delimiter = path.delimiter;

console.log(process.env.PATH.split(path.delimiter))
// console.log(delimiter)

PythonPaths1=process.env.PATH.split(path.delimiter)

let NewPythonPath=[]

const searchRegExp =/\\/g
const replaceWith = '/'

for (let x in PythonPaths1){
    y=PythonPaths1[x].replace(searchRegExp,replaceWith);
    NewPythonPath.push(y)
    
 }
 console.log(NewPythonPath)

currentDirectory=String(process.cwd()).replace(searchRegExp,replaceWith)
console.log(currentDirectory)

//let {PythonShell} = require('python-shell')

//console.log(PythonShell)

// let options = {
//     mode: 'text',
//     pythonPath:  'C:/ProgramData/Anaconda3',
//     pythonOptions: ['-u'],
//     scriptPath: currentDirectory,
//   };

// // options = {pythonPath: 'python3'}

let options = {
  pythonPath: 'C:\\ProgramData\\Anaconda3\\python',
};

let {PythonShell} = require('python-shell')


PythonShell.runString('x=1+1;print(x)', options, function (err) {
    if (err) throw err;
    console.log('finished');
});

// PythonShell.runString('x=1+1;print(x)', null, function (err) {
//   if (err) throw err;
//   console.log('finished');
// });

// console.log("done")
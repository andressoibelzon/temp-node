// const amount = 12

// if(amount < 10) {
//     console.log('small number');
// }
// else {
//     console.log('large number')
// }

// console.log('hey its my first node app!! ')

// console.log(__dirname);

// setInterval(()=>{
// console.log('hello world');
// },1000)

// const names = require('./4-names');
// const sayHi = require('./5-utils');
// const data = require('./6-alternative-fllavor')
// require('./7-mind-grenade')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

// const os = require('os');

// // info about current user
// const user = os.userInfo();
// console.log(user);

// //method returns the system uptime in seconds

// console.log(`The system Uptime is ${os.uptime()}`);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

//  console.log(currentOS);

// const path = require('path')


// console.log(path.sep);

// const filePath = path.join('./content/', 'subfolder', 'test.txt')
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);

// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt', 'utf-8')
// const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second);

// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})

// const { writeFileSync, readFile} = require('fs');

// readFile('./content/first.txt', 'utf-8', (err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
// const first = result;
// readFile('./content/second.txt', 'utf8' , (err,result) =>{
//     if(err){
//         console.log(err);
//         return
//     }
//     const second = result;
//     writeFile(
//         './content/result-async.txt', 
//         (`Here is the result : ${first}, ${second}`,
//         (err, result) =>{
//             if(err) {
//                 console.log(err)
//                 return
//             }
//             console.log(result);
//         })
// )
// })

// const http = require('http');

// const server = http.createServer((req,res)=>{
// if (req.url === '/') {
// res.write('Welcome to our home page')
// }
// if (req.url === '/about') {
//     res.end('Here is our short')
// }
// res.end(
// `<h1>Oops!</h1>`)
// })

// server.listen(5000)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);
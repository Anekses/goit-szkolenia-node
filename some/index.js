const fs = require('fs').promises;

fs.readdir(__dirname)
  .then(files => {
    return Promise.all( 
      files.map(async filename => {
        const stats = await fs.stat(filename);
        return {
          Name: filename,
          Size: stats.size,
          Date: stats.mtime,
        };
      }),
    );
  })
  .then(result => console.table(result));


// const fs = require('fs');


// fs.readdir(__dirname, (error, files) => {
//     files.map(filename => {
//         const stats = fs.stat(filename, (error, stats) => {
//             // console.log({stats})
//             console.log({
//                 name: filename,
//                 size: stats.size,
//                 date: stats.mtime
//             })
//         });
//     })
// })

// console.log(__dirname)
    












// const timeFirst = new Date().toTimeString()
// fs.readFile('./../readme.txt', (err, data) => {
//     const timeSecond = new Date().toTimeString()
//     const diff = timeSecond - timeFirst
//     if (err) throw err;
//     console.log('Async', data.toString());
// })
// const consoleEnd

// const data = fs.readFileSync('./../readme.txt')

// console.log('DataSync', data.toString())



// const fs = require('fs');


// // fs.writeFile('./readme.txt', 'write something', () => {})

// fs.appendFile('./readme-new.txt', 'write something', () => {})

// // fs.readFile('./readme.txt', (err, data) => {
// //     if (err) throw err;
// //     console.log(data.toString());
// // })

// // console.log(fs)















// CommonJs

// const logger = require('./info');
// logger.info('some msg')

// ECMAScript

// import { info } from './info.js';
// import { readFile } from 'fs';

// info('I will show you FS')

// readFile('./readme.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   });


// readFile('readme.txt')
    // .then(data => console.log(data.toString()))













// global.something = '123'

// setTimeout(() => {
//     console.log('setTimeout')
// }, 2000)


// process.nextTick(() => {
//     console.log('next tick');
// })

// process.argv

// fs 












// console.log(process.cwd())
// console.log(process.exit())


// console.log(global)

// const func = () => {
//     return 2;
// }

// export default function func() {
//     return 2;
// }

// module.export = {
//     func
// }

// __filename - 'index.js'
// __dirname - '/d/Adrian/Adrian/Anek/Projekty/GoIT/goit-node'
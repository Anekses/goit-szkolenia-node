const readline = require('readline');
const fs = require('fs').promises;

const { program } = require('commander');
require('colors');

program.option(
    '-f, --file [type]',
    'nazwa pliku do zapisania wynikow',
    'base.txt'
)

program.parse(process.argv)

// if (process.argv.length > 5) {
//     console.log('Za dużo argumentow!')
// }

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
const logFile = program.opts().file
const mind = Math.floor(Math.random() * 10) + 1;

const isValid = (value) => {
    if (isNaN(value)) {
        console.log("Wprowadz liczbe!".red)
        return false;
    }
    if (value < 1 || value > 10) {
        console.log("Zly zakres!".red)
        return false;
    }
    return true;
}

const log = async (data) => {
    try {
        await fs.appendFile(logFile, `${data}\n`)
        console.log(`Rezultat zapisany w pliku ${logFile}`.green)
    } catch {
        console.log('Cos poszlo nie tak')
    }
}

const game = () => {
    rl.question(
        "Wprowadz liczbe od 1 do 10: ".yellow,
        async (value) => {
            const number = Number.parseInt(value, 10)
            if (!isValid(number)) {
                game();
                return;
            }
            count += 1

            if (number === mind) {
                console.log(`Gratulacje, odgadłeś za ${count} razem`.green)
                await log(
                    `${new Date().toLocaleDateString()}: Gratulacje. Odgadłeś liczbę za ${count} razem`
                )
                rl.close();
                return;
            }
            console.log('Nie zgadłeś, spróbuj jeszcze raz'.red)
            game();
        }
    )
}

game();















// const readline = require('readline');
// const fs = require('fs');

// const rl = readline.createInterface({
//     input: process.stdin,
//     // input: fs.createReadStream('./readme.txt'),
//     output: process.stdout,
// });

// rl.on('line', cmd => {
//     console.log(`Napisałaś/eś ${cmd}`)
// })

// rl.question('Skad pochodzisz?', answer => {
//     rl.pause()
//     // Some code
//     rl.resume()
//     const a = 'http'
//     const b = '://'
//     const d = 'www'
//     const table = [a, b, d]
    
//     table.join()
    
//     console.log(`O super, ja nie jestem z ${answer}, ale spoko`)

//     rl.close()
// })
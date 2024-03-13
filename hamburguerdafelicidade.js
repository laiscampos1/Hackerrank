'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY restaurants as parameter.
 */

function solve(restaurants) {
function solve(restaurants) {
    const n = restaurants.length;
    
    // Inicializamos o array dp com zeros
    let dp = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        dp[i] = restaurants[i][2]; // Inicializamos com a felicidade de comer no restaurante i
        for (let j = 0; j < i; j++) {
            // Calculamos a felicidade se Tim decidir ir do restaurante j para o i
            let happiness = dp[j] + restaurants[i][2] - restaurants[j][1];
            dp[i] = Math.max(dp[i], happiness);
        }
    }
    
    // Encontramos a felicidade máxima em dp
    let maxHappiness = Math.max(...dp);
    return maxHappiness;
}


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let restaurants = Array(n);

    for (let i = 0; i < n; i++) {
        restaurants[i] = readLine().replace(/\s+$/g, '').split(' ').map(restaurantsTemp => parseInt(restaurantsTemp, 10));
    }

    const result = solve(restaurants);

    ws.write(result + '\n');

    ws.end();
}

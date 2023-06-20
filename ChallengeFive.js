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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    
    const diag1 = []
    const diag2 = []
    let contador = arr.length
    let soma1 = 0
    let soma2 = 0

    for (let i = 0; i < arr.length; i++){
        soma1 = soma1 + arr[i][i]
    }
    for (let x = 0; x < arr.length; x++){
        contador = contador - 1
        soma2 = soma2 + arr[x][contador]
    }
    var resultadoFinal = soma1 - soma2
    if (resultadoFinal < 0){
        var resultadoFinal2 = resultadoFinal * (-1)
        return resultadoFinal2
    }else {
    return resultadoFinal}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

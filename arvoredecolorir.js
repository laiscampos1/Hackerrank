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
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY tree
 *  2. INTEGER_ARRAY color
 *  3. INTEGER_ARRAY s
 */

function solve(tree, color, s) {
    function solve(tree, color, s) {
    // Criar um objeto para representar a árvore
    const adjacencyList = new Array(tree.length + 1).fill(null).map(() => []);

    // Preencher o objeto de lista de adjacência da árvore
    for (const [node1, node2] of tree) {
        adjacencyList[node1].push(node2);
        adjacencyList[node2].push(node1);
    }

    // Função auxiliar para percorrer a subárvore a partir de um nó
    function traverse(node, parent, subtreeColors, visited) {
        visited[node] = true;
        subtreeColors.add(color[node - 1]); // node - 1 pois os índices começam em 0

        for (const neighbor of adjacencyList[node]) {
            if (!visited[neighbor] && neighbor !== parent) {
                traverse(neighbor, node, subtreeColors, visited);
            }
        }
    }

    // Função para resolver cada consulta
    function query(node) {
        const visited = new Array(tree.length + 1).fill(false);
        const subtreeColors = new Set();
        traverse(node, -1, subtreeColors, visited);
        return subtreeColors.size;
    }

    // Resolver cada consulta e retornar os resultados
    const results = [];
    for (const node of s) {
        results.push(query(node));
    }
    return results;
}


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const r = parseInt(firstMultipleInput[2], 10);

    let tree = Array(n - 1);

    for (let i = 0; i < n - 1; i++) {
        tree[i] = readLine().replace(/\s+$/g, '').split(' ').map(treeTemp => parseInt(treeTemp, 10));
    }

    let color = [];

    for (let i = 0; i < n; i++) {
        const colorItem = parseInt(readLine().trim(), 10);
        color.push(colorItem);
    }

    let s = [];

    for (let i = 0; i < m; i++) {
        const sItem = parseInt(readLine().trim(), 10);
        s.push(sItem);
    }

    const result = solve(tree, color, s);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

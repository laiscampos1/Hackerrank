function processData(input) {
    const n = parseInt(input.trim());

    function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }

    function printFibonacci(level) {
        for (let i = 0; i < level; i++) {
            let row = "";
            for (let j = 0; j <= i; j++) {
                row += fibonacci(j) + " ";
            }
            console.log(row);
        }
    }

    printFibonacci(n);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

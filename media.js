const alunos = [
    {nome: "Diego", ra: "0050832311001", notaP1: 10, notaP2: 8},
    {nome: "Ana", ra: "0050832311002", notaP1: 6, notaP2: 6},
    {nome: "João", ra: "0050832311003", notaP1: 5, notaP2: 4},
    {nome: "Maria", ra: "0050832311004", notaP1: 8, notaP2: 7},
    {nome: "Pedro", ra: "0050832311005", notaP1: 9, notaP2: 6},
];

const tabelaAlunos = document.getElementById("tabela-alunos");
const mediaP1 = document.getElementById("media-p1");
const mediaP2 = document.getElementById("media-p2");
const aprovados = document.getElementById("aprovados");
const reprovados = document.getElementById("reprovados");

let somaP1 = 0;
let somaP2 = 0;
let aprovadosCount = 0;
let reprovadosCount = 0;

for (const aluno of alunos) {
    const mediaAluno = (aluno.notaP1 + aluno.notaP2) / 2;
    const situacao = mediaAluno >= 6 ? "Aprovado" : "Reprovado";
    const corNota = mediaAluno >= 6 ? "blue" : "red";

    somaP1 += aluno.notaP1;
    somaP2 += aluno.notaP2;

    if (situacao === "Aprovado") {
        aprovadosCount++;
    } else {
        reprovadosCount++;
    }

    tabelaAlunos.innerHTML += `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.ra}</td>
            <td style="color: ${corNota}">${aluno.notaP1}</td>
            <td style="color: ${corNota}">${aluno.notaP2}</td>
            <td style="color: ${corNota}">${mediaAluno.toFixed(1)}</td>
            <td>${situacao}</td>
        </tr>
    `;
}

mediaP1.innerText = (somaP1 / alunos.length).toFixed(1);
mediaP2.innerText = (somaP2 / alunos.length).toFixed(1);
aprovados.innerText = aprovadosCount;
reprovados.innerText = reprovadosCount;

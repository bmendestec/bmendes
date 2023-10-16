// Aluno bolsista?
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const todosBolsistas1 = (resultado, bolsista) => resultado && bolsista
const resultado1 = alunos.map(a => a.bolsista).reduce(todosBolsistas1)

console.log(resultado1)

const todosBolsistas2 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas2))


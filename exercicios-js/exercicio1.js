// exercício 1
const boasVindas = nome => console.log(`Olá, ${nome}!`)

boasVindas('Bruno')

// exercício 2
const idadeEmDias = idade => 365 * idade
console.log(idadeEmDias(25))

function converteIdadeDeAnoEmDias(idade){
    const diasDoAno = 365
    const result = diasDoAno * idade    
    console.log(result)
}

converteIdadeDeAnoEmDias(25)
converteIdadeDeAnoEmDias(70)


/*Função factory desafio*/
function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: preco * 0.1
    }
}

console.log(criarProduto('Algodão', 15.40))
console.log(criarProduto('iPad', 1199.49))
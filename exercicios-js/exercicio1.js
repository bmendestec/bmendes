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


/**Function to calc the salary's employee */

const salaryCounter = (qtHour, salaryPerHour) => salaryPerHour * qtHour
console.log(salaryCounter(150,40.5))

/**Function to return the month according to the parameter */

const dayOfMonth = function (number){ 
    const date = new Date;

    date.setMonth(number - 1)

    return date.toLocaleString('en-US', {month: 'long'})
}

for (i = 1; i <= 12; i++){
    console.log(`${i} - ${dayOfMonth(i)}`)
}
console.log(dayOfMonth(1))
console.log(dayOfMonth(2))
console.log(dayOfMonth(3))
console.log(dayOfMonth(4))


/**Function to return which number is higher than the other */
const whichIsHiger = function (num1, num2) {
    if (typeof num1 != typeof num2) return false
    return num1 >= num2
}

console.log(whichIsHiger(0,0))
console.log(whichIsHiger(0,"0"))
console.log(whichIsHiger(5,1))

/**Function to return the type of data */

const invertTheData = function(parameter){
    let dataReturn
    if (typeof parameter === 'number'){
        if(parameter > 0){
            dataReturn = parameter
        }else{
            dataReturn = -parameter
        }
    }else if(typeof parameter === 'boolean'){
        if(parameter){
            dataReturn = !parameter
        }else{
            dataReturn = parameter
        }
    }else{
        dataReturn = 'Boolean or expected number, but the parameter is a string'
    }

    return dataReturn
}

console.log(invertTheData(true))
console.log(invertTheData("6"))
console.log(invertTheData(-2000))
console.log(invertTheData("na programação"))


//Execício 01 Exercicios__Javascript.pdf
function returnCalc(a, b){
    let soma = a + b
    let subtracao = a - b
    let multiplicacao = a * b
    let divisao = a / b
    console.log(`Soma: ${a} + ${b} = ${soma}`)
    console.log(`Subtração: ${a} - ${b} = ${subtracao}`)
    console.log(`Multiplicação: ${a} * ${b} = ${multiplicacao}`)
    console.log(`Divisão: ${a} / ${b} = ${divisao}`)
}

returnCalc(10,2)

//Execício 02 Exercicios__Javascript.pdf
function mmyTriangle(side1 = 0, side2 = 0, side3 = 0){
    let msg

    if(side1 == side2 && side1 == side3){
        msg = 'Equilátero'
    }else if((side1 == side2 && side1 != side3) || (side1 != side2 && side1 == side3)){
        msg = 'Isósceles'
    }else{
        msg = 'Escaleno'
    }

    return msg
}

console.log(mmyTriangle(2,2,2))
console.log(mmyTriangle(2,2,3))
console.log(mmyTriangle(4,20,3))

//Execício 03 Exercicios__Javascript.pdf
function expoNumber(num, exp){
    let outcome
    if(num == 0 || exp == 0){
        return 'There is no way to calculate it bro!'
    }else{
        if(num && exp){
            outcome = Math.pow(num, exp)
        }
    }   
    
    return outcome
}

console.log(expoNumber(4,8))

//Execício 05 Exercicios__Javascript.pdf

function priceReturn(param){
    let realCurrency
    realCurrency = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    })
    return realCurrency.format(param)
}
const param = 0.1 + 0.2
console.log(priceReturn(param))

//Execício 06 Exercicios__Javascript.pdf
Array.prototype.forEach2 = function(callback) {
    for(let i=0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})


//Desafio filter
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }        
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: false },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter2(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))
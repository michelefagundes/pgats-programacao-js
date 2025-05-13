/*
Exercício 01: 
Validador de idade mínima para adoção

Regra: Verificar se um dog pode ser adotado com base na idade mínima definida
Extra: adicionar uma condicional que permita o dog ser adotado independentemente da idade caso seja porte PEQUENO
*/
console.log('Exercício 1')
console.log('')

const nomeDog = 'Aveia'
const idadeDog = 1
const porte = 'pequeno'

const podeSerAdotado = idadeDog >=2 || porte === 'pequeno' ? 'Pode ser adotado'
                                                           : 'Não pode ser adotado'

console.log(podeSerAdotado)
console.log('')
/*
Exercício 02:
Calculadora de ração diária

Regra: receber o peso do dog em kg + estoque atual de ração em gramas. Usar a fórmula: gramas por dia = peso x 30
Exibir: nome do dog, peso, quantidade de ração recomendada por dia, quantos dias o estoque atual vai durar
*/
console.log('Exercício 2:')
console.log('')

const pesoDog = 7
const nome = 'Leopoldo'
const estoqueAtual = 4680

const quantidadeRecomendada = pesoDog * 30
const duracaoEstoque = Math.floor(estoqueAtual / quantidadeRecomendada)

console.log('Nome: ' + nome)
console.log('Peso: ' + pesoDog+'kg')
console.log('A quantidade de ração recomendada é: ' +quantidadeRecomendada+'g')
console.log('O estoque vai durar '+ duracaoEstoque + ' dias')
console.log('')

// Alternativa como funcao
console.log('Como função:')
console.log('')

function calculdoraDeRacaoDiaria(pesoDog, nome, estoqueAtual) {
    const quantidadeRecomendada = pesoDog * 30
    const duracaoEstoque = Math.floor(estoqueAtual / quantidadeRecomendada)
    
    console.log('Nome: ' + nome)
    console.log('Peso: ' + pesoDog+'kg')
    console.log('A quantidade de ração recomendada é: ' +quantidadeRecomendada+'g')
    console.log('O estoque vai durar '+ duracaoEstoque + ' dias')
    console.log('')    
}

calculdoraDeRacaoDiaria(19, 'Lily', '1450')
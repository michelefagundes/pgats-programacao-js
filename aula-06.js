/**
 Exercício 01:
 Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.
 */

 function removerStringsDeUmaLista(lista) {
    return lista.filter(item=> typeof item === 'number')
 }

 const listaMista = [1, 2, 3, 4, 5, 'A', 'B', 'C', 'D']
 const listaSemStrings = removerStringsDeUmaLista(listaMista)
 console.log(listaSemStrings)

 /**
 Exercício 02:
 Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata.
 O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.
export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
  }
  
  function geradorDeTagsDeIdentificacao(dog) {
      return dog.toUpperCase()
  }
  
  function verificarSePodeSerAdotado(idade, tamanho) {
      return idade >=1 && tamanho === 'M' ? true
                                          : false
  }
  
  function calcularConsumoDeRacao(nome, dias, peso) {
      var qtdeRecomendada = peso * 300
  
      return qtdeRecomendada
  }
  
  function decidirTipoDeAtividadePorPorte(tamanho){
      var atividade
      if(tamanho === 'pequeno'){
          atividade = "brincar dentro de casa"
      } else if(tamanho === 'médio' )  {
          atividade = "caminhada no quarteirão"
      } else if(tamanho == 'grande'){
          atividade = "correr no parque"
      } else {
          atividade = "inválido"
      }
  
      return atividade
  }
  
  async function buscarDadoAsync(){
      return 'Pipoca'
  }
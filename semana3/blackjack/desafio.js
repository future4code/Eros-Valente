/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 // zerando as variaveis e arrays definidas no arquivo nossoJogo
pontuacaoUsuario, pontuacaoCPU = 0 
cartasUsuario = []
cartasCPU =[]

if (confirm("Quer iniciar uma nova rodada?")){ 
   for (let i=0; i < 2 ; i++ ) {
      cartasUsuario.push(comprarCarta()) 
      // array cartasUsuario definido no arquivo nossoJogo
      while (cartasUsuario[0] === "A" && cartasUsuario[1] === "A") {
        cartasUsuario[0] === comprarCarta()
        cartasUsuario[1] === comprarCarta()
      }
   }   

   for (let i=0; i < 2; i++) {
      cartasCPU.push(comprarCarta())
      // array cartasCPU definido no arquivo nossoJogo
      while (cartasCPU[0] === "A" && cartasCPU[1] === "A") {
        cartasCPU[0] === comprarCarta()
        cartasCPU[1] === comprarCarta()
      }
   }

   pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor// pontuacaoUsuario definida em nossoJogo
   pontuacaoCPU = cartasCPU[0].valor + cartasCPU[1].valor // pontuacaoCPU definida em nossoJogo
   
   let cartasReveladasUsuario = `${cartasUsuario[0].texto} ${cartasUsuario[1].texto}`
   let cartasReveladasCPU = `${cartasCPU[0].texto}`
   let i = 2

   while (pontuacaoUsuario <= 21 && confirm(`suas cartas são ${cartasReveladasUsuario}. A carta revelada do computador é ${cartasReveladasCPU}.` + "\n" + "Deseja comprar mais uma carta?")) {
      cartasUsuario.push(comprarCarta())
      cartasReveladasUsuario += ` ${cartasUsuario[i].texto}`
      pontuacaoUsuario += cartasUsuario[i].valor 
      i++   
   }

   while (pontuacaoCPU < pontuacaoUsuario && pontuacaoUsuario <= 21) {
      if (pontuacaoCPU < 21) {
         cartasCPU.push(comprarCarta())
         console.log(cartasCPU)
         pontuacaoCPU += cartasCPU[i].valor
         i++
      }
   }      

   for (i; i < cartasUsuario.length; i++) {
      cartasReveladasUsuario += cartasUsuario[i].texto
   
   } 
   for (i = 1 ; i < cartasCPU.length; i++) {
      cartasReveladasCPU += ` ${cartasCPU[i].texto}`
   
   }

   let mensagemFinal = `Suas cartas são ${cartasReveladasUsuario}. A sua pontuação é ${pontuacaoUsuario}.` +
    "\n" + `As cartas do computador são ${cartasReveladasCPU}. A pontuação do computador é ${pontuacaoCPU}.`


   if (pontuacaoUsuario > 21) {
      alert(mensagemFinal + "\n" + "O computador ganhou!")
   } else if (pontuacaoCPU > 21 && pontuacaoUsuario <= 21) {
      alert(mensagemFinal + "\n" + "O usuario ganhou!")
   } else if (pontuacaoUsuario > pontuacaoCPU && pontuacaoUsuario <= 21 && pontuacaoCPU < 21) {
      alert(mensagemFinal + "\n" + "O usuario ganhou!")
   } else if (pontuacaoCPU === pontuacaoUsuario) {
      alert(mensagemFinal + "\n" + "Empatou!")
   }

}



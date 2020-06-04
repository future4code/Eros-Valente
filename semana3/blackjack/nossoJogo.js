

let cartasUsuario = []
let cartasCPU = []
let pontuacaoUsuario = 0
let pontuacaoCPU = 0

console.log("Bem vindo ao jogo de Blackjack!") 
if (confirm("Quer iniciar uma nova rodada?")){ 
   for (let i=0; i < 2 ; i++ ) {
      cartasUsuario.push(comprarCarta())

   }
   for (let i=0; i < 2; i++) {
      cartasCPU.push(comprarCarta())
   }
   
   pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   pontuacaoCPU = cartasCPU[0].valor + cartasCPU[1].valor
   console.log(`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}  - pontuação ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${cartasCPU[0].texto} ${cartasCPU[1].texto}  - pontuação ${pontuacaoCPU}`)
   
   if (pontuacaoUsuario > pontuacaoCPU) {
      console.log("O usuário ganhou!")
   } else if (pontuacaoUsuario < pontuacaoCPU) {
      console.log("O computador ganhou!")
   } else {console.log("Empate!")}
} else{console.log("O jogo acabou")} 
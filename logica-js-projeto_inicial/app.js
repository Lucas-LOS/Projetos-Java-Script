alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1) ;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;
//enquanto o chute não for igual ao num. secreto

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

// se chute for igual ao número secreto

    if (chute == numeroSecreto) {
        // parar
        break; 
    } else {
        if (numeroSecreto > chute) {
            alert (`O Numero secreto é maior que ${chute}`);
            } else {
        if (numeroSecreto < chute) {
            alert (`O Numero secreto é menor que ${chute}`);
    }
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ?"tentativas" : "tentativa"
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas>1){
  //  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// else {
  //  alert (`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);

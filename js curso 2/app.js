let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector (tag);
campo.innerHTML = texto ;
}
exibirTextoNaTela ("h1","Jogo do numero secreto");
exibirTextoNaTela("p","escolha um numero entre 1 e 10");

function verificarChute (){
    let chute = document.querySelector ("input").value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela ("h1","acertou");
        let mensagemTentativa = `você descobriu o numero secreto com ${tentativas} tentativa(s)!`;
        exibirTextoNaTela ("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
        reiniciarJogo()
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela("p","O Numero secreto é menor");
        } else {
            exibirTextoNaTela("p","O Numero secreto é maior");  
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio ();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}
function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";

}   
function reiniciarJogo() {               
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
}

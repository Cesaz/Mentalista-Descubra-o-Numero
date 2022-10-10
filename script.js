var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
var jogadasRestantes = document.getElementById("tentativas");
jogadasRestantes.innerHTML = "Tentativas: " + tentativas;
document.getElementById("novoJogo").disabled = true;

function chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var valorResultado = document.getElementById("resultado");
  if (chute == numeroSecreto) {
    valorResultado.innerHTML = "PARABÉNS!!! VOCÊ ACERTOU";
    document.getElementById("valor").disabled = true;
    document.getElementById("novoJogo").disabled = false;
    document.getElementById("botaoChute").disable = true;
    tentativas=3;
  } else if (tentativas == 0) {
    valorResultado.innerHTML = "Suas TENTATIVAS acabaram. O número era " + numeroSecreto;
    jogadasRestantes.innerHTML = "Tentativas: " + tentativas;
    document.getElementById("botaoChute").disabled = true;
    document.getElementById("valor").disabled = true;
    document.getElementById("novoJogo").disabled = false;
    tentativas=3;
  } else if (chute > 10 || chute < 0) {
    valorResultado.innerHTML = "Digite um número entre 0 e 10";
  } else if (numeroSecreto < chute) {
    valorResultado.innerHTML = "O número é MENOR que " + chute;
    jogadasRestantes.innerHTML = "Tentativas: " + tentativas;
    document.getElementById("novoJogo").disabled = true;
    tentativas--;
  } else if (numeroSecreto > chute) {
    valorResultado.innerHTML = "O número é MAIOR que " + chute;
    jogadasRestantes.innerHTML = "Tentativas: " + tentativas;
    document.getElementById("novoJogo").disabled = true;
    tentativas--;
  }
  document.getElementById("valor").value = "";
}

function novoJogo() {
  var numeroSecreto = parseInt(Math.random() * 11);
  var tentativas = 3;
  var jogadasRestantes = document.getElementById("tentativas");
  jogadasRestantes.innerHTML = "Tentativas: " + tentativas;
  document.getElementById("novoJogo").disabled = true;
  document.getElementById("valor").disabled = false;
  document.getElementById("botaoChute").disabled = false;
}

//Terminado em 14/09/2022
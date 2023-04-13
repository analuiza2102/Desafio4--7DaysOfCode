var numeroSecreto = Math.floor(Math.random() * 11);
var tentativas = 0;

function Adivinhar() {
  var resultado = document.getElementById("resultado");
  var adivinhe = parseInt(document.getElementById("valor").value);
  
  // Verifica se o chute é maior que 10
  if (adivinhe > 10) {
    resultado.innerHTML = "Digite um número de 0 a 10!";
    return; // Retorna sem incrementar as tentativas
  }
  
  tentativas++;
  console.log(adivinhe);
  if (numeroSecreto == adivinhe) {
    resultado.innerHTML = "Acertou!";
  } else if (numeroSecreto > adivinhe && tentativas < 3) {
    resultado.innerHTML = "O número secreto é maior!";
  } else if (numeroSecreto < adivinhe && tentativas < 3) {
    resultado.innerHTML = "O número secreto é menor!";
  } else {
    resultado.innerHTML = "Suas tentativas acabaram! O número secreto era " + numeroSecreto;
    document.getElementById("valor").disabled = true;
  }
}

function ReiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 11);
  tentativas = 0;
  document.getElementById("valor").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("valor").disabled = false;
}
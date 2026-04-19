// Função responsável por validar os campos de entrada (peso e altura)
// e habilitar/desabilitar o botão de cálculo
function validarCampos() {
  // Converte os valores dos inputs para número
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const botao = document.getElementById("btnCalcular");

  // Habilita o botão apenas se os valores forem números válidos e maiores que zero
  if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

// Função principal que calcula o IMC e exibe o resultado na tela
function calcularIMC() {
  // Referências aos elementos do DOM
  const pesoInput = document.getElementById("peso");
  const alturaInput = document.getElementById("altura");
  const resultado = document.getElementById("resultado");

  // Converte os valores informados para número
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  // Validação: impede cálculo com valores inválidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.innerText = "Preencha valores válidos.";
    return; // Encerra a execução se os dados forem inválidos
  }

  // Cálculo do IMC: peso dividido pela altura ao quadrado
  const imc = peso / (altura * altura);

  // Limita o resultado para 2 casas decimais
  const imcFormatado = imc.toFixed(2);

  let classificacao = "";

  // Classificação baseada nos padrões da OMS
  if (imc < 18.5) {
    classificacao = "Magreza";
  } else if (imc < 25) {
    classificacao = "Normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau I";
  } else if (imc < 40) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }

  // Exibe o resultado final na tela
  resultado.innerText = `Seu IMC é ${imcFormatado} (${classificacao})`;
}

// Função para limpar os campos e resetar o estado da aplicação
function limparCampos() {
  const peso = document.getElementById("peso");
  const altura = document.getElementById("altura");
  const resultado = document.getElementById("resultado");
  const botao = document.getElementById("btnCalcular");

  // Limpa os valores dos inputs e o resultado exibido
  peso.value = "";
  altura.value = "";
  resultado.innerText = "";

  // Coloca o foco no campo peso para melhorar a usabilidade
  peso.focus();

  // Desabilita o botão até que novos valores válidos sejam inseridos
  botao.disabled = true;
}
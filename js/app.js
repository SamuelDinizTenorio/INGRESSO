// Define a quantidade inicial de ingressos disponíveis para cada tipo de assento
let qtd_pista = 100;
let qtd_superior = 200;
let qtd_inferior = 400;

// Função para processar a compra de ingressos
function comprar() {
  // Obtém o tipo de ingresso selecionado pelo usuário
  let ingresso = document.getElementById("tipo-ingresso").value;
  // Obtém a quantidade de ingressos desejada pelo usuário
  let quantidade = document.getElementById("qtd").value;
  // Obtém as referências para os elementos HTML que exibem a quantidade de ingressos disponíveis para cada tipo de assento
  let pista = document.getElementById("qtd-pista");
  let cadeiraSuperior = document.getElementById("qtd-superior");
  let cadeiraInferior = document.getElementById("qtd-inferior");

  // Verifica se o usuário selecionou a opção "pista"
  if (escolha == "pista") {
    // Verifica se há ingressos disponíveis para a pista
    if (qtd_pista == 0) {
      // Exibe um alerta informando que os ingressos estão esgotados
      alert("Ingressos esgotados!");
    } else if (quantidade > qtd_pista) {
      // Exibe um alerta informando que a quantidade solicitada excede a disponibilidade
      alert("Não temos está quantidade de ingressos dísponivel!");
    } else {
      // Atualiza a quantidade de ingressos disponíveis para a pista
      qtd_pista -= quantidade;
      // Atualiza a exibição da quantidade de ingressos disponíveis na página
      pista.innerHTML = `<span id="qtd-pista">${qtd_pista}</span>`;
    }
  }

  // Verifica se o usuário selecionou a opção "superior"
  if (escolha == "superior") {
    // Lógica similar à verificação para a pista
    // ...
  }

  // Verifica se o usuário selecionou a opção "inferior"
  if (escolha == "inferior") {
    // Lógica similar à verificação para a pista
    // ...
  }

  // Limpa o campo de quantidade após a compra
  document.getElementById("qtd").value = "";
}
"use strict";

// Obtendo as Variáveis
var cancel = document.querySelector("#cancel");
var modalAcolhimento = document.querySelector("#modal-acolhimento");
var nav = document.querySelector("#nav");
var content = document.querySelector("#content");
var modalContent = document.querySelector("#modalContent");
var userName = "Olá";
// let userName = prompt("Qual o seu nome?")
userName = userName.replace(/\d+/g, "");
while (userName === null || userName === "" || userName === false) {
  userName = prompt("Nome inválido. Tente novamente.");
}
userName = userName.trim();
userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

// Abrindo o modal e aplicando os efeitos de fundo.
cancel.addEventListener("click", function () {
  modalAcolhimento.showModal();
  nav.classList.add("blur");
  content.classList.add("blur");

  // Criando o HTML do modal de acolhimento
  modalContent.innerHTML = "\n        <img src=\"src/assets/icons/logo (ENGPLAY).svg\" alt=\"Logo\" class=\"logo\">\n        <img src=\"src/assets/icons/coracao.svg\" alt=\"Cora\xE7\xE3o\" class=\"heart\">\n        <h1 class=\"byeUser\">Sentiremos sua falta, ".concat(userName, "!!</h1>\n        <p class=\"byeText\">Respeitamos totalmente sua decis\xE3o de encerar sua assinatura. Por\xE9m caso haja algo que possamos fazer para melhorar sua experi\xEAncia, queremos ouvi-lo antes de nos despedirmos.</p>\n        <button class=\"manterAss keepSub\">Manter Assinatura</button>\n        <button class=\"continuarAcolhi\" id=\"bntEtp1\">Continuar</button>\n    ");
  keepSubscription();
  Feedback();
});

// Removendo os efeitos quando o modal for fechado.
modalAcolhimento.addEventListener("close", function (event) {
  nav.classList.remove("blur");
  content.classList.remove("blur");
});

// Criando o form
function Feedback() {
  var bntEtp1 = document.querySelector("#bntEtp1");
  bntEtp1.addEventListener("click", function () {
    modalContent.innerHTML = "\n            <img src=\"src/assets/icons/logo (ENGPLAY).svg\" alt=\"Logo\" class=\"logo\">\n            <h1 class=\"titleFeedback\">Podemos ouvir voc\xEA rapidinho?</h1>\n            <p class=\"textFeedback\">Entender seu motivo nos ajuda a evoluir. \xC9 r\xE1pido, basta escolher uma op\xE7\xE3o abaixo.</p>\n            <form class=\"feedbackForm\" id=\"feedbackForm\">\n                <div>\n                    <input type=\"radio\" name=\"feedback\" id=\"dificuldades\">\n                    <label for=\"dificuldades\">Dificuldades com o suporte ao cliente.</label>\n                </div>\n\n                <div>\n                    <input type=\"radio\" name=\"feedback\" id=\"\">\n                    <label for=\"\">Falta de tempo.</label>\n                </div>\n\n                <div>\n                    <input type=\"radio\" name=\"feedback\" id=\"\">\n                    <label for=\"\">Quest\xF5es financeira.</label>\n                </div>\n\n                <div>\n                    <input type=\"radio\" name=\"feedback\" id=\"\">\n                    <label for=\"\">Conte\xFAdo n\xE3o atendeu \xE0s minhas necessidades.</label>\n                </div>\n                <div>\n\n                    <input type=\"radio\" name=\"feedback\" id=\"\">\n                    <label for=\"\">J\xE1 atingi o meu objetivo.</label>\n                </div>\n\n                <div>\n                    <label for=\"\">Outro motivo:</label>\n                    <input type=\"text\">\n                </div>\n            </form>\n\n            <button class=\"manterAss keepSub\">Manter Assinatura</button>\n            <button class=\"continuarAcolhi\" id=\"bntFeedBack\">Continuar</button>\n        ";
    keepSubscription();
  });
}

// Botao de manter Assinatura funcional
function keepSubscription() {
  var keepSub = document.querySelectorAll(".keepSub");
  keepSub.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modalAcolhimento.close();
    });
  });
}
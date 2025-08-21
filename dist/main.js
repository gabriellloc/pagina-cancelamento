"use strict";

// Obtendo as Variáveis
var cancel = document.querySelector("#cancel");
var modalAcolhimento = document.querySelector("#modal-acolhimento");
var nav = document.querySelector("#nav");
var content = document.querySelector("#content");
var modalContent = document.querySelector("#modalContent");

// Colocando um nome qualquer na aplicação
// let userName = prompt("Qual o seu nome?")
var userName = "Isadora";
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
  var bntEtp1 = document.querySelector("#bntEtp1");
  bntEtp1.addEventListener("click", function () {
    Feedback();
  });
});

// Removendo os efeitos quando o modal for fechado.
modalAcolhimento.addEventListener("close", function () {
  nav.classList.remove("blur");
  content.classList.remove("blur");
});

// Criando o form
function Feedback() {
  modalContent.innerHTML = "\n            <img src=\"src/assets/icons/logo (ENGPLAY).svg\" alt=\"Logo\" class=\"logo\">\n            <h1 class=\"titleFeedback\">Podemos ouvir voc\xEA rapidinho?</h1>\n            <p class=\"textFeedback\">Entender seu motivo nos ajuda a evoluir. \xC9 r\xE1pido, basta escolher uma op\xE7\xE3o abaixo.</p>\n            <form class=\"feedbackForm\" id=\"feedbackForm\">\n                <div>\n                    <input type=\"radio\" name=\"feedback\" id=\"dificuldades\">\n                    <label for=\"dificuldades\">Dificuldades com o suporte ao cliente.</label>\n                </div>\n\n                <div>\n                    <input type=\"radio\" name=\"feedback\" id=\"noTime\" value=\"noTime\">\n                    <label for=\"noTime\">Falta de tempo.</label>\n                </div>\n\n                <div>\n                    <input type=\"radio\" name=\"feedback\" id=\"financial\" value=\"financial\">\n                    <label for=\"financial\">Quest\xF5es financeira.</label>\n                </div>\n\n                <div>\n                    <input type=\"radio\" name=\"feedback\" id=\"needs\" value=\"needs\">\n                    <label for=\"needs\">Conte\xFAdo n\xE3o atendeu \xE0s minhas necessidades.</label>\n                </div>\n                <div>\n\n                    <input type=\"radio\" name=\"feedback\" id=\"objective\">\n                    <label for=\"objective\">J\xE1 atingi o meu objetivo.</label>\n                </div>\n\n                <div>\n                    <label for=\"Other\">Outro motivo:</label>\n                    <input type=\"text\" id=\"Other\" value=\"\">\n                </div>\n            </form>\n\n            <button class=\"manterAss keepSub\">Manter Assinatura</button>\n            <button class=\"continuarAcolhi\" id=\"bntFeedBack\">Continuar</button>\n        ";
  keepSubscription();
  offers();
}

// Ofertas na tela.
function offers() {
  // Pegando o botão que abre a página de ofertas
  var bntFeedBack = document.querySelector("#bntFeedBack");

  // Pegando o input de texto caso o usuário escolha digitar
  var inputValueText = document.querySelector("#Other");
  var textValue = "";
  inputValueText.addEventListener("input", function () {
    var inputValue = document.querySelector("input[name='feedback']:checked");
    textValue = inputValueText.value;

    // Desmarca caso o usuário tenha marcado um radio
    if (inputValue != null) {
      inputValue.checked = false;
    }
  });

  // Removendo a opção de texto caso haja um radio marcado
  var inputRadios = document.querySelectorAll("input[name='feedback']");
  inputRadios.forEach(function (inp) {
    inp.addEventListener("click", function () {
      inputValueText.value = "";
      textValue = "";
    });
  });

  // Abre a oferta de acordo com o click do usuário

  bntFeedBack.addEventListener("click", function () {
    var inputValue = document.querySelector("input[name='feedback']:checked");

    // Caso o usuário não coloque nenhum valor no form
    if (inputValue === null && textValue == "") {
      return alert("Preencha os dados.");
    }

    // Cria o elemento de ofertas.
    var offers = document.createElement("dialog");

    // Criando o elemento de oferta
    offers.classList.add("offers");
    if (textValue != "") {
      console.log(textValue);
      rememberBenefits();
    }

    // Caso o motivo seja "Sem tempo"
    else if (inputValue.value == "noTime") {
      var divTimeOut = document.createElement("div");
      divTimeOut.classList.add("divTimeOut");
      divTimeOut.innerHTML = "\n                <h3>E se voc\xEA apenas pausasse seu acesso?</h3>\n                <p>Voc\xEA pode congelar sua assinatura por at\xE9 60 dias, sem perder seu hist\xF3rico de progresso ou certificados.</p>\n                <div class=\"flex\">\n                    <button class=\"acceptOffer\" id=\"acceptOfferBnt\">Aceitar</button>\n                    <button class=\"recuseOffer\" id=\"recuseOfferBnt\">Recusar</button>\n                </div>\n            ";

      // Adiciona as informações no modal
      offers.append(divTimeOut);
      // Adiciona o modal de ofertas no body
      document.body.append(offers);
      // Aplica um efeito de blur no modal principal
      modalAcolhimento.classList.add("blur");

      // Faz o modal de ofertas aparecer na tela.
      offers.showModal();

      // Caso ele recuse a oferta
      var recuseOfferBnt = document.querySelector("#recuseOfferBnt");
      recuseOfferBnt.addEventListener("click", function () {
        modalAcolhimento.classList.remove("blur");
        offers.remove();
        rememberBenefits();
      });

      // Caso ele aceite a oferta.
      var acceptOfferBnt = document.querySelector("#acceptOfferBnt");
      acceptOfferBnt.addEventListener("click", function () {
        modalAcolhimento.classList.remove("blur");
        modalAcolhimento.close();
        offers.remove();

        // Parte de aceite de oferta
      });
    }

    // Caso o motivo seja "financeiro"
    else if (inputValue.value == "financial") {
      var divFinancial = document.createElement("div");
      divFinancial.classList.add("divTimeOut");
      divFinancial.innerHTML = "\n                <h3>Aprender n\xE3o precisa pesar no bolso.</h3>\n                <p>Podemos oferecer 50% OFF por 2 meses para que voc\xEA continue estudando enquanto se reorganiza.</p>\n                <div class=\"flex\">\n                    <button class=\"acceptOffer\" id=\"acceptOfferBnt\">Aceitar</button>\n                    <button class=\"recuseOffer\" id=\"recuseOfferBnt\">Recusar</button>\n                </div>\n            ";
      // Adiciona as informações no modal
      offers.append(divFinancial);
      // Adiciona o modal de ofertas no body
      document.body.append(offers);
      // Aplica um efeito de blur no modal principal
      modalAcolhimento.classList.add("blur");

      // Remove o efeito de blur no modal principal
      offers.addEventListener("close", function () {
        modalAcolhimento.classList.remove("blur");
      });

      // Faz o modal de ofertas aparecer na tela.
      offers.showModal();

      // Caso ele recuse a oferta
      var _recuseOfferBnt = document.querySelector("#recuseOfferBnt");
      _recuseOfferBnt.addEventListener("click", function () {
        modalAcolhimento.classList.remove("blur");
        offers.remove();
        rememberBenefits();
      });

      // Caso ele aceite a oferta
      var _acceptOfferBnt = document.querySelector("#acceptOfferBnt");
      _acceptOfferBnt.addEventListener("click", function () {
        modalAcolhimento.classList.remove("blur");
        modalAcolhimento.close();
        offers.remove();

        // Parte de aceite de oferta
      });
    }

    // Caso o motivo seja "Nao atendeu as necessidades"
    else if (inputValue.value == "needs") {
      var divNeeds = document.createElement("div");
      divNeeds.classList.add("divTimeOut");
      divNeeds.innerHTML = "\n                <h3>Trilha recomendada baseada no seu hist\xF3rico + 10% ou mais de desconto</h3>\n                <p class=\"imgsNeeds\">\n                    <img src=\"src/assets/imgs/ENGPLAY_CAPACURSO_REVIT_1-1 1.png\" alt=\"\">\n                    <img src=\"src/assets/imgs/ENGPLAY_CAPACURSO_COMBATEINCENDIO 1.png\" alt=\"\">\n                    <img src=\"src/assets/imgs/ENGPLAY_CAPACURSO_COMBATEINCENDIO_DO_PROJETO_A_APROVACAO 2.png\" alt=\"\">\n                    <img src=\"src/assets/imgs/ENGPLAY_CAPA-CRIANDO-PORTIFOLIOS.png\" alt=\"\">\n                </p>\n                <div class=\"flex\">\n                    <button class=\"acceptOffer\" id=\"acceptOfferBnt\">Aceitar</button>\n                    <button class=\"recuseOffer\" id=\"recuseOfferBnt\">Recusar</button>\n                </div>\n            ";
      // Adiciona as informações no modal
      offers.append(divNeeds);
      // Adiciona o modal de ofertas no body
      document.body.append(offers);
      // Aplica um efeito de blur no modal principal
      modalAcolhimento.classList.add("blur");

      // Remove o efeito de blur no modal principal
      offers.addEventListener("close", function () {
        modalAcolhimento.classList.remove("blur");
      });

      // Faz o modal de ofertas aparecer na tela.
      offers.showModal();

      // Caso ele recuse a oferta
      var _recuseOfferBnt2 = document.querySelector("#recuseOfferBnt");
      _recuseOfferBnt2.addEventListener("click", function () {
        modalAcolhimento.classList.remove("blur");
        offers.remove();
        rememberBenefits();
      });

      // Caso ele aceite a oferta
      var _acceptOfferBnt2 = document.querySelector("#acceptOfferBnt");
      _acceptOfferBnt2.addEventListener("click", function () {
        modalAcolhimento.classList.remove("blur");
        modalAcolhimento.close();
        offers.remove();
      });
    } else {
      rememberBenefits();
    }
  });
}
function rememberBenefits() {
  modalContent.innerHTML = "\n        <div class=\"rememberBenefits\">\n            <img src=\"src/assets/icons/logo (ENGPLAY).svg\" alt=\"Logo\">\n            <h1>Voc\xEA est\xE1 prestes a perder todos os seus benef\xEDcios</h1>\n            <p>Cancelando sua inscri\xE7\xE3o hoje, voc\xEAs deixar\xE1 de ter acesso aos cursos de:</p>\n            <div>\n                <img src=\"src/assets/imgs/etp-2-leitura-e-interpretacao.png\" alt=\"Curso de leitura e interpreta\xE7\xE3o de projetos estruturais\">\n                <img src=\"src/assets/imgs/etp-2-instalacoes-hidrossanitarias.png\" alt=\"Curso de instala\xE7\xF5es Hidrossanit\xE1rias\">\n                <img src=\"src/assets/imgs/etp-2-projeto-hidrossanitario.png\" alt=\"Curso de projeto Hidrossanit\xE1rio.\">\n                <img src=\"src/assets/imgs/etp-2-combate-a-incendio.png\" alt=\"Curso de projeto de combate a inc\xEAndio\">\n            </div>\n            <ul>\n                <li><span class=\"blue\">+ </span>Comunidade exclusiva de networking</li>\n                <li><span class=\"blue\">+ </span>Mais de 40 cursos completos</li>\n                <li><span class=\"blue\">+ </span>Banco de vagas de emprego</li>\n                <li><span class=\"blue\">+ </span>Seu progresso salvo e dispon\xEDvel a qualquer momento</li>\n                <li><span class=\"blue\">+ </span>Planilhas e templates</li>\n                <li><span class=\"blue\">+ </span>Suporte e mentorias com especialistas</li>\n            </ul>\n            <div>\n                <button class=\"manterAss keepSub\">Manter Assinatura</button>\n                <button class=\"continuarAcolhi\">Continuar</button>\n            </div>\n            <button id=\"back\">\n                <img src=\"src/assets/icons/ic_outline-arrow-back.svg\" alt=\"Bot\xE3o de voltar\">\n            </button>\n        </div>\n    ";
  keepSubscription();
  backArrow();
}

// Botão de manter Assinatura
function keepSubscription() {
  var keepSub = document.querySelectorAll(".keepSub");
  keepSub.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modalAcolhimento.close();
    });
  });
}

// Botao de voltar
function backArrow() {
  var back = document.querySelector("#back");
  back.addEventListener("click", function () {
    Feedback();
  });
}
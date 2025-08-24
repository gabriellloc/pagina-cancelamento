"use strict";

import "./css/index.css"

let userName = "Isabela santos"

// Obtendo as Variáveis
// Botão de cancelar a assinatura
const bntCancel = document.querySelector("#cancel")

// Modal
const modal = document.querySelector("#modal-acolhimento")

// Pegando o content/body para aplicar o efeito
const nav = document.querySelector("#nav");
const content = document.querySelector("#content");

// Botão de abrir o modal
bntCancel.addEventListener("click", () => {
    modal.innerHTML = ""
    nav.classList.add("blur")
    content.classList.add("blur")
    // Mostra o modal
    modal.showModal()

    // Mostra a parte de acolhimento
    reception()
})

// O que ocorre quando o modal fecha
modal.addEventListener("close", () => {
    modal.innerHTML = ""
    nav.classList.remove("blur")
    content.classList.remove("blur")
})

// Funcao de manter Assinatura
function keepSubscription(){
    const keepSub = document.querySelectorAll(".keepSub");
    keepSub.forEach(btn => {
        btn.addEventListener("click", () => { 
            modal.close();
        });
    })
}

// Botão de voltar
function backArrow() {
    const back = document.querySelectorAll(".backk")
    back.forEach(bnt => {
        bnt.addEventListener("click", () => {
            feedBack()
        })
    })
}

// Função de mostrar o acolhimento
function reception(){
    const receptionDiv = document.createElement("div")
    receptionDiv.classList.add("receptionDiv")
    receptionDiv.innerHTML = `
        <img src="assets/icons/logo (ENGPLAY).svg" alt="Logo" class="logo">
        <img src="assets/icons/coracao.svg" alt="Coração" class="heart">
        <h1 class="byeTitle">Sentiremos sua falta, <span class="capitalize">${userName}</span>!!</h1>
        <p class="byeText">Respeitamos totalmente sua decisão de encerar sua assinatura. Porém caso haja algo que possamos fazer para melhorar sua experiência, queremos ouvi-lo antes de nos despedirmos.</p>
        <div>
            <button class="manterAss keepSub">Manter Assinatura</button>
            <button class="continueBnt" id="bntFeedback">Continuar</button>
        </div>
    `
    modal.append(receptionDiv)
    keepSubscription()

    const bntFeedback = document.querySelector("#bntFeedback")
    bntFeedback.addEventListener("click", () => {
        feedBack()
    })
}

// Parte do feedback
function feedBack(){
    modal.innerHTML = ""
    const feedBackDiv = document.createElement("div")
    feedBackDiv.classList.add("feedBackDiv")

    feedBackDiv.innerHTML = `
        <img src="assets/icons/logo (ENGPLAY).svg" alt="Logo" class="logo">
        <h1 class="titleFeedback">Podemos ouvir você rapidinho?</h1>
        <p class="textFeedback">Entender seu motivo nos ajuda a evoluir. É rápido, basta escolher uma opção abaixo.</p>
        <form class="feedbackForm" id="feedbackForm">
            <div>
                <input type="radio" name="feedback" id="dificuldades">
                <label for="dificuldades">Dificuldades com o suporte ao cliente.</label>
            </div>

            <div>
                <input type="radio" name="feedback" id="noTime" value="noTime">
                <label for="noTime">Falta de tempo.</label>
            </div>

            <div>
                <input type="radio" name="feedback" id="financial" value="financial">
                <label for="financial">Questões financeira.</label>
            </div>

            <div>
                <input type="radio" name="feedback" id="needs" value="needs">
                <label for="needs">Conteúdo não atendeu às minhas necessidades.</label>
            </div>
            <div>

                <input type="radio" name="feedback" id="objective">
                <label for="objective">Já atingi o meu objetivo.</label>
            </div>

            <div>
                <label for="Other">Outro motivo:</label>
                <input type="text" id="Other" value="">
            </div>
        </form>
        <div class="divBnt">
            <button class="manterAss keepSub">Manter Assinatura</button>
            <button class="continueBnt" id="bntFeedBack">Continuar</button>
        </div>
    `
    modal.appendChild(feedBackDiv)
    keepSubscription()

    // Pegando o valor digitado ou marcado no form
    const inputValueText = document.querySelector("#Other")

    // Pegando o input de texto caso o usuário escolha digitar
    let textValue = ""
    inputValueText.addEventListener("input", () => {
        const inputValue = document.querySelector("input[name='feedback']:checked");
        textValue = inputValueText.value
        
        // Desmarca caso o usuário tenha marcado um radio
        if (inputValue != null){
            inputValue.checked = false
        }
    })

    // Removendo a opção de texto caso haja um radio marcado
    const inputRadios = document.querySelectorAll("input[name='feedback']");
    inputRadios.forEach(inp => {
        inp.addEventListener("click", () => {
            inputValueText.value = ""
            textValue = ""
        })
    })
    
    // Botão de continuação/offers
    const bntFeedBack = document.querySelector("#bntFeedBack")
    bntFeedBack.addEventListener("click", () => {
        const inputValue = document.querySelector("input[name='feedback']:checked");
        if (inputValue === null && textValue == ""){
            return alert("Preencha os dados.")
        }

        // Criando a parte de ofertas
        const offers = document.createElement("dialog")
        // Estilizacao
        offers.classList.add("offers")


        // Parte caso o usuario digite
        if (textValue != ""){
            rememberBenefits()
        }

        // Caso o motivo seja "Sem tempo"
        else if (inputValue.value == "noTime"){
            const divTimeOut = document.createElement("div")
            divTimeOut.classList.add("divTimeOut")
            divTimeOut.innerHTML = `
                <h3>E se você apenas pausasse seu acesso?</h3>
                <p>Você pode congelar sua assinatura por até 60 dias, sem perder seu histórico de progresso ou certificados.</p>
                <div class="flex">
                    <button class="acceptOffer" id="acceptOfferBnt">Aceitar</button>
                    <button class="recuseOffer" id="recuseOfferBnt">Recusar</button>
                </div>
            `

            // Adiciona as informações no modal
            offers.append(divTimeOut)
            // Adiciona o modal de ofertas no body
            document.body.append(offers)
            // Aplica um efeito de blur no modal principal
            modal.classList.add("blur")

            // Faz o modal de ofertas aparecer na tela.
            offers.showModal()


            // Caso ele recuse a oferta
            const recuseOfferBnt = document.querySelector("#recuseOfferBnt")
            recuseOfferBnt.addEventListener("click", () => {
                modal.classList.remove("blur")
                offers.remove()
                rememberBenefits()
            })

            // Caso ele aceite a oferta.
            const acceptOfferBnt = document.querySelector("#acceptOfferBnt")
            acceptOfferBnt.addEventListener("click", () => {
                modal.classList.remove("blur")
                modal.close()
                offers.remove()

                // Parte de aceite de oferta
            })
        }

        // Caso o motivo seja "financeiro"
        else if (inputValue.value == "financial") {
            const divFinancial = document.createElement("div")
            divFinancial.classList.add("divTimeOut")
            divFinancial.innerHTML = `
                <h3>Aprender não precisa pesar no bolso.</h3>
                <p>Podemos oferecer 50% OFF por 2 meses para que você continue estudando enquanto se reorganiza.</p>
                <div class="flex">
                    <button class="acceptOffer" id="acceptOfferBnt">Aceitar</button>
                    <button class="recuseOffer" id="recuseOfferBnt">Recusar</button>
                </div>
            `
            // Adiciona as informações no modal
            offers.append(divFinancial)
            // Adiciona o modal de ofertas no body
            document.body.append(offers)
            // Aplica um efeito de blur no modal principal
            modal.classList.add("blur")
            
            // Remove o efeito de blur no modal principal
            offers.addEventListener("close", ()=> {
                modal.classList.remove("blur")
            })
            
            // Faz o modal de ofertas aparecer na tela.
            offers.showModal()
            
            // Caso ele recuse a oferta
            const recuseOfferBnt = document.querySelector("#recuseOfferBnt")
            recuseOfferBnt.addEventListener("click", () => {
                modal.classList.remove("blur")
                offers.remove()
                rememberBenefits()
            })
            
            // Caso ele aceite a oferta
            const acceptOfferBnt = document.querySelector("#acceptOfferBnt")
            acceptOfferBnt.addEventListener("click", () => {
                modal.classList.remove("blur")
                modal.close()
                offers.remove()
                
                // Parte de aceite de oferta
            })
        }

        else if (inputValue.value == "needs"){
            const divNeeds = document.createElement("div")
            divNeeds.classList.add("divTimeOut")
            divNeeds.innerHTML = `
                <h3>Trilha recomendada baseada no seu histórico + 10% ou mais de desconto</h3>
                <p class="imgsNeeds">
                    <img src="assets/imgs/ENGPLAY_CAPACURSO_REVIT_1-1 1.png" alt="">
                    <img src="assets/imgs/ENGPLAY_CAPACURSO_COMBATEINCENDIO 1.png" alt="">
                    <img src="assets/imgs/ENGPLAY_CAPACURSO_COMBATEINCENDIO_DO_PROJETO_A_APROVACAO 2.png" alt="">
                    <img src="assets/imgs/ENGPLAY_CAPA-CRIANDO-PORTIFOLIOS.png" alt="">
                </p>
                <div class="flex">
                    <button class="acceptOffer" id="acceptOfferBnt">Aceitar</button>
                    <button class="recuseOffer" id="recuseOfferBnt">Recusar</button>
                </div>
            `
            // Adiciona as informações no modal
            offers.append(divNeeds)
            // Adiciona o modal de ofertas no body
            document.body.append(offers)
            // Aplica um efeito de blur no modal principal
            modal.classList.add("blur")
            
            // Remove o efeito de blur no modal principal
            offers.addEventListener("close", ()=> {
                modal.classList.remove("blur")
            })
            
            // Faz o modal de ofertas aparecer na tela.
            offers.showModal()
            
            // Caso ele recuse a oferta
            const recuseOfferBnt = document.querySelector("#recuseOfferBnt")
            recuseOfferBnt.addEventListener("click", () => {
                modal.classList.remove("blur")
                offers.remove()
                rememberBenefits()
            })
            
            // Caso ele aceite a oferta
            const acceptOfferBnt = document.querySelector("#acceptOfferBnt")
            acceptOfferBnt.addEventListener("click", () => {
                modal.classList.remove("blur")
                modal.close()
                offers.remove()
                
            })
        }

        else {
            rememberBenefits()
        }
    })
}

function rememberBenefits(){
    const rememberBenefitsDiv = document.createElement("div")
    rememberBenefitsDiv.classList.add("rememberBenefitsDiv")
    modal.innerHTML = ``
    rememberBenefitsDiv.innerHTML = `
        <img src="assets/icons/logo (ENGPLAY).svg" alt="Logo">
        <h1>Você está prestes a perder todos os seus benefícios</h1>
        <p>Cancelando sua inscrição hoje, vocês deixará de ter acesso aos cursos de:</p>
        <div>
            <img src="assets/imgs/etp-2-leitura-e-interpretacao.png" alt="Curso de leitura e interpretação de projetos estruturais">
            <img src="assets/imgs/etp-2-instalacoes-hidrossanitarias.png" alt="Curso de instalações Hidrossanitárias">
            <img src="assets/imgs/etp-2-projeto-hidrossanitario.png" alt="Curso de projeto Hidrossanitário.">
            <img src="assets/imgs/etp-2-combate-a-incendio.png" alt="Curso de projeto de combate a incêndio">
        </div>
        <ul>
            <li><span class="blue">+ </span>Comunidade exclusiva de networking</li>
            <li><span class="blue">+ </span>Mais de 40 cursos completos</li>
            <li><span class="blue">+ </span>Banco de vagas de emprego</li>
            <li><span class="blue">+ </span>Seu progresso salvo e disponível a qualquer momento</li>
            <li><span class="blue">+ </span>Planilhas e templates</li>
            <li><span class="blue">+ </span>Suporte e mentorias com especialistas</li>
        </ul>
        <div class="divBnt">
            <button class="manterAss keepSub">Manter Assinatura</button>
            <button class="continueBnt" id="detailsContinue">Continuar</button>
        </div>
        <button id="back" class="backk">
            <img src="assets/icons/ic_outline-arrow-back.svg" alt="Botão de voltar">
        </button>
    `
    modal.append(rememberBenefitsDiv)
    keepSubscription()
    backArrow()

    const detailsContinue = document.querySelector("#detailsContinue")
    detailsContinue.addEventListener("click", () => {
        details()
    })
}

function details(){
    modal.innerHTML = ""
    const detailsDiv = document.createElement("div")
    detailsDiv.classList.add("detailsDiv")
    detailsDiv.innerHTML = `
        hello world!
    `

    modal.append(detailsDiv)
}
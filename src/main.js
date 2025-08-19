"use strict";

// Obtendo as Variáveis
const cancel = document.querySelector("#cancel");
const modalAcolhimento = document.querySelector("#modal-acolhimento");
const nav = document.querySelector("#nav");
const content = document.querySelector("#content");

const modalContent = document.querySelector("#modalContent");

// Colocando um nome qualquer na aplicacao
let userName = prompt("Qual o seu nome?")
// let userName = " "

userName = userName.replace(/\d+/g, "")
while (userName === null || userName === "" || userName === false){
    userName = prompt("Nome inválido. Tente novamente.")
}

userName = userName.trim();
userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

// Abrindo o modal e aplicando os efeitos de fundo.
cancel.addEventListener("click", ()=> {
    modalAcolhimento.showModal();
    nav.classList.add("blur")
    content.classList.add("blur")

    // Criando o HTML do modal de acolhimento
    modalContent.innerHTML = `
        <img src="src/assets/icons/logo (ENGPLAY).svg" alt="Logo" class="logo">
        <img src="src/assets/icons/coracao.svg" alt="Coração" class="heart">
        <h1 class="byeUser">Sentiremos sua falta, ${userName}!!</h1>
        <p class="byeText">Respeitamos totalmente sua decisão de encerar sua assinatura. Porém caso haja algo que possamos fazer para melhorar sua experiência, queremos ouvi-lo antes de nos despedirmos.</p>
        <button class="manterAss keepSub">Manter Assinatura</button>
        <button class="continuarAcolhi" id="bntEtp1">Continuar</button>
    `

    keepSubscription()
    Feedback()
})

// Removendo os efeitos quando o modal for fechado.
modalAcolhimento.addEventListener("close", (event)=> {
    nav.classList.remove("blur")
    content.classList.remove("blur")
})


// Criando o form
function Feedback(){
    const bntEtp1 = document.querySelector("#bntEtp1");
    bntEtp1.addEventListener("click", () =>{
    modalContent.innerHTML = `
            <img src="src/assets/icons/logo (ENGPLAY).svg" alt="Logo" class="logo">
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
                    <input type="radio" name="feedback" id="financial">
                    <label for="financial">Questões financeira.</label>
                </div>

                <div>
                    <input type="radio" name="feedback" id="needs">
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

            <button class="manterAss keepSub">Manter Assinatura</button>
            <button class="continuarAcolhi" id="bntFeedBack">Continuar</button>
        `
        keepSubscription();
        offers();
    })
}

// Ofertas na tela.
function offers(){
    // Pegando o botão que abre a página de ofertas
    const bntFeedBack = document.querySelector("#bntFeedBack")

    // Pegando o input de texto caso o usuário escolha digitar
    const inputValueText = document.querySelector("#Other")
    let textValue = ""
    inputValueText.addEventListener("input", () => {
        const inputValue = document.querySelector("input[name='feedback']:checked");
        textValue = inputValueText.value

        // Desmarca caso o usuário tenha marcado um radio
        if (inputValue != null){
            inputValue.checked = false
        }
    })

    // Removendo a opcao de texto caso haja um radio marcado
    const inputRadios = document.querySelectorAll("input[name='feedback']");
    inputRadios.forEach(inp => {
        inp.addEventListener("click", () => {
            inputValueText.value = ""
            textValue = ""
        })
    })

    // Abre a oferta de acordo com o click do usuário
    bntFeedBack.addEventListener("click", () => {
        const inputValue = document.querySelector("input[name='feedback']:checked");

        // Caso o usuário não coloque nenhum valor no form
        if (inputValue === null && textValue == ""){
            return console.log("Nada")
        }

        // Criando o elemento de oferta
        const offers = document.createElement("dialog")
        offers.classList.add("offers")

        if (textValue != ""){
            console.log("Mandou texto")
        }

        else if (inputValue.value == "noTime"){
            const divTimeOut = document.createElement("div")
            divTimeOut.classList.add("divTimeOut")
            divTimeOut.innerHTML = `
                <h3>E se você apenas pausasse seu acesso?</h3>
                <p>Você pode congelar sua assinatura por até 60 dias, sem perder seu histórico de progresso ou certificados.</p>
                <div class="flex">
                    <button class="acceptOffer">Aceitar</button>
                    <button class="recuseOffer">Recusar</button>
                </div>
            `
            offers.append(divTimeOut)
            document.body.append(offers)
            modalAcolhimento.classList.add("blur")
            offers.showModal()
        }

        // Efeito de blur no modal principal
        offers.addEventListener("close", ()=> {
            modalAcolhimento.classList.remove("blur")
        })
        
        // document.body.append(offers)
        // offers.showModal()

    })
}

// Botao de manter Assinatura funcional
function keepSubscription(){
    const keepSub = document.querySelectorAll(".keepSub");
    keepSub.forEach(btn => {
        btn.addEventListener("click", () => { 
            modalAcolhimento.close(); 
        });
    })
}
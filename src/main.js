"use strict";

// Obtendo as Variáveis
const cancel = document.querySelector("#cancel");
const modalAcolhimento = document.querySelector("#modal-acolhimento");
const nav = document.querySelector("#nav");
const content = document.querySelector("#content");

const modalContent = document.querySelector("#modalContent");

// Colocando um nome qualquer na aplicacao
let userName = prompt("Qual o seu nome?")

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
                    <input type="radio" name="feedback" id="">
                    <label for="">Falta de tempo.</label>
                </div>

                <div>
                    <input type="radio" name="feedback" id="">
                    <label for="">Questões financeira.</label>
                </div>

                <div>
                    <input type="radio" name="feedback" id="">
                    <label for="">Conteúdo não atendeu às minhas necessidades.</label>
                </div>
                <div>

                    <input type="radio" name="feedback" id="">
                    <label for="">Já atingi o meu objetivo.</label>
                </div>

                <div>
                    <label for="">Outro motivo:</label>
                    <input type="text">
                </div>
            </form>

            <button class="manterAss keepSub">Manter Assinatura</button>
            <button class="continuarAcolhi" id="bntFeedBack">Continuar</button>
        `
        keepSubscription()
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
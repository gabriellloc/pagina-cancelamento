"use strict";

const cancel = document.querySelector("#cancel")
const modalAcolhimento = document.querySelector("#modal-acolhimento");

cancel.addEventListener("click", ()=> {
    modalAcolhimento.showModal()
})
"use strict";

const cancel = document.querySelector("#cancel");
const modalAcolhimento = document.querySelector("#modal-acolhimento");
const nav = document.querySelector("#nav");
const content = document.querySelector("#content")


cancel.addEventListener("click", ()=> {
    modalAcolhimento.showModal();
    nav.classList.add("blur")
    content.classList.add("blur")
})

modalAcolhimento.addEventListener("close", (event)=> {
    nav.classList.remove("blur")
    content.classList.remove("blur")
})
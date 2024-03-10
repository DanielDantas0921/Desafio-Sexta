import { buttonLeftFunction, buttonRightFunction, buttonsNumerico, chamarShows } from "./functions.js"
const shows = document.querySelector(".shows")
const buttons = document.querySelectorAll(".btn")
const buttonLeft = document.querySelector(".btn-left")
const buttonRight = document.querySelector(".btn-right")
const buttonLighBoxFechar = document.querySelector(".lightboxFechar")
let i = 0



for (let j = 1; j < 21; j++) {
    chamarShows(j)
}


buttons.forEach(buttonsNumerico)

buttonLeft.addEventListener("click", buttonLeftFunction)

buttonRight.addEventListener("click",buttonRightFunction)

buttonLighBoxFechar.addEventListener("click", ()=> {
    const lightbox = document.querySelector(".lightbox")
    lightbox.style.display = "none"
})



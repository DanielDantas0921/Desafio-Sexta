import { criarCard } from "./criarCard.js"
const shows = document.querySelector(".shows")
const loadingBoolean = false
const loading = document.querySelector(".loading")



export async function chamarShows(id) {

    try {
        const url = "https://api.tvmaze.com/shows/" + id
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Error ao carregar a api na url: " + url)
        }
        const data = await response.json()
        criarCard(data)
    } catch (error) {
        console.log(error.message)
    }

}

export function limparEstilosButton(){
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((button)=>{
        button.classList.remove("ativo")
    })
}

export const buttonsNumerico = (button)=>{
    button.addEventListener(("click"), async (ev) => {
        shows.innerHTML = ""
        limparEstilosButton()
        button.classList.add("ativo")
        loading.style.display = "block"
        let start
        if(Number(ev.currentTarget.dataset.number) == 1){
            start = 1

        } else {
             start = Number(ev.currentTarget.dataset.number) * 20
           
        }
        let end = start + 20
        let k = 0

        for (k = start; k < end; k++) {
           await chamarShows(k)
        }

        setTimeout(()=>{
            loading.style.display = "none"
        },1000)
        

        
        
    })
}
export function buttonLeftFunction(){
    const ativo = Number(document.querySelector(".ativo").dataset.number)
    if(ativo == 1){
        alert("Você já está na posição inicial")
        return
    }
    const selecionar= ativo - 1
    const selecionarEl = document.querySelector(`button[data-number="${selecionar}"]`)
    selecionarEl.click()
}

export function buttonRightFunction (){
    const ativo = Number(document.querySelector(".ativo").dataset.number)
    if(ativo == 10){
        alert("Você já está na posição final")
        return
    }
    const selecionar= ativo + 1
    const selecionarEl = document.querySelector(`button[data-number="${selecionar}"]`)
    selecionarEl.click()

}
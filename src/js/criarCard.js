let objInformacoes = {

}

export function criarCard(data){
    const shows = document.querySelector(".shows")

    

    // criar a classe card
    const card = document.createElement("div")
    card.classList.add("card")
    card.name = data.name
    card.img = data.image.original
    card.description = data.summary
    card.addEventListener("click", cardEventListener)

    // criar a img da classe card
    const img = document.createElement("img")
    img.src = data.image.original

    // criar a div card-description
    const description = document.createElement("div")
    description.classList.add("card-description")

    // criar o h3 da div card-description
    const h3 = document.createElement("h3")
    h3.innerText = `Título: ${data.name}`

    // criar o p da div card-description
    const p = document.createElement("p")
    let textoP = "Gêneros:"
    const generos = data.genres.map((generosTexto) => textoP += " " + generosTexto )
    p.innerText = textoP

    // colocar o p e h3 na div card-description
    description.append(h3,p)

    // colocar a img e a div card-description na div card
    card.append(img, description)

    // colocar o card na section shows
    shows.appendChild(card)



}

function cardEventListener(ev){
    console.log("O título da obra é: "+  this.name)
    console.log("A description é: " + this.description)
    console.log("O local da imagem é: " + this.img)
    const lightbox = document.querySelector(".lightbox")
    const img = document.querySelector(".lightbox-conteudo img")
    const title = document.querySelector(".lightbox-conteudo h3")
    const sinopse = document.querySelector(".lightbox-conteudo p")
    lightbox.style.display = "block"
    img.src = this.img
    title.innerText = this.name
    sinopse.innerHTML = this.description

}
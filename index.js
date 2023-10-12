function carregar(){
    let img = document.getElementById("imagem");
    let data = new Date()
    let hora =data.getHours()

    document.getElementById("teste").innerHTML = `  agora são ${hora} horas `;
    if (hora >= 12 && hora < 18){
        //bom tarde
        img.src = "imagens/tarde.jpg"
        img.height= 156
        document.body.style.backgroundColor="rgb(0, 119, 255)"
    }
    else if(hora >= 12 && hora <  18){
        //bom dia 
        img.src = "imagens/manha.jpg"
        img.height= 156
        document.body.style.backgroundColor ="yellow"
    }
    else {
        //boa noite
        img.src = "imagens/noite.jpg"
        img.height= 156
        document.body.style.backgroundColor = "black"
    }
  

}

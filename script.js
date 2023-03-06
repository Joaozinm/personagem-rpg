function identificar() {
    var nomef = document.getElementById("nometxt")
    var nome = nomef.value
    var msg = document.getElementById("msgtxt")
    
    if (nome >= 0 || nome < 0) {
        alert("[ERRO] Favor preencher os dados corretamente!")
    }
    else {
        nomef.value = ""
        nomef.focus()
        var genero = ""
        var raca = ""
        var fsex = document.getElementsByName("radiosex")
        var fraca = document.getElementsByName("radioraca")
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {

            var genero = "Masculino"

            if (fraca[0].checked) {
                raca = "Humano"
                img.setAttribute("src", "assets/humanm.jpg")
            } else if (fraca[1].checked) {
                raca = "Ogro"
                img.setAttribute("src", "assets/ogrem.jpg")
            }  else if (fraca[2].checked) {
                raca = "Elfo"
                img.setAttribute("src", "assets/elfm.jpg")
            }  else if (fraca[3].checked) {
                raca = "Troll"
                img.setAttribute("src", "assets/trollm.jpg")
            }
        } else if (fsex[1].checked) {

            genero = "Feminino"

            if (fraca[0].checked) {
                raca = "Humano"
                img.setAttribute("src", "assets/humanf.jpg")
            } else if (fraca[1].checked) {
                raca = "Ogro"
                img.setAttribute("src", "assets/ogref.png")
            }  else if (fraca[2].checked) {
                raca = "Elfo"
                img.setAttribute("src", "assets/elff.jpg")
            }  else if (fraca[3].checked) {
                raca = "Troll"
                img.setAttribute("src", "assets/trollf.jpg")
            }
        }
        msg.innerHTML = `<p>Seu nome é ${nome}, da raça ${raca}!</p>`
        msg.appendChild(img)
} 
}
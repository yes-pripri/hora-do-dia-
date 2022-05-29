function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22 //data.getHouars()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
       //BOM DIA! 
        img.src =  'cafe.png' 
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
      //BOA TARDE!  
        img.src = 'barco.png'
        document.body.style.background= '#FFA07A'       
    } else {
        //BOA NOITE!
        img.src = 'lua.png'
        document.body.style.background = '#26262B'
    }
}


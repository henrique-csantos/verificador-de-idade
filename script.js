function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById(`txtano`)
    var res =  window.document.getElementById(`res`)
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute ('src', 'fotocriancah.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotojovemh.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'fotoadultoh.png')
            }else {
                //idoso
                img.setAttribute('src', 'fotoidosoh.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'fotocriancaf.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotojovemf.png')
            } else if (idade < 60){
                //adulta
                img.setAttribute('src', 'fotoadultof.png')
            } else {
                //idosa
                img.setAttribute('src', 'fotoidosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
const api = "d848df7a4fa258a0adf87596dac29022"


//variaveis executaveis
const botao = document.getElementById('btn_cidade')
const btn_erro = document.getElementById('btn_erro')
const erro = document.getElementsByClassName('erro')[0]
const container = document.getElementsByClassName('container')[0]

//variaveis de alteração
const img_previsao = document.getElementById('img_previsao')
const tempC = document.getElementById('tempC')
const info_detalhes = document.getElementById('info_detalhes')
const vento = document.getElementById('vento')
const umidade = document.getElementById('umidade')
const txt_cidade = document.getElementById('txt_cidade')

botao.addEventListener('click', function () {

    let cidade = document.getElementById('input_cidade')

    if (cidade.value.length === 0) {

        erro.style.display = 'flex'
        document.getElementsByTagName('header')[0].style.display = 'none'
        container.style.display = 'none'

        btn_erro.addEventListener('click', function () {
            erro.style.display = 'none'
            container.style.display = 'flex'
            document.getElementsByTagName('header')[0].style.display = 'flex'

            
        })
        
        return
        
    }

    nomeCidade = cidade.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade.trim()}&appid=${api}&lang=pt_br&units=metric`

    container.style.display = 'flex'

    fetch(url)
        .then(res => res.json())
        .then(dados => {
            
            tempC.innerText = `${dados.main.temp}°C`
            info_detalhes.innerText =`${dados.weather[0].description}`
            vento.innerText = `Vento: ${dados.wind.speed} m/s`
            umidade.innerText = `Umidade: ${dados.main.humidity}%`
            txt_cidade.innerText = `${nomeCidade}`

            const icon = dados.weather[0].icon
            img_previsao.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

        })
        .catch(err => {
            alert("Cidade não encontrada")
            container.style.display = 'none'
        })

})

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const inputs = document.querySelectorAll('input')

const converter = () => {
    inputs.forEach(inp => {
        inp.addEventListener('input', () => {
            const req = new XMLHttpRequest()
            req.open('GET', 'data.json')
            req.setRequestHeader('Content-type', 'application/json')
            req.send()

            req.addEventListener('load', () => {
                const response = JSON.parse(req.response)

                if(inp.name === 'som'){
                    usd.value = (inp.value / response.valute.usd).toFixed(2)
                    eur.value = (inp.value / response.valute.eur).toFixed(2)
                }else if(inp.name === 'usd'){
                    som.value = (inp.value * response.valute.usd).toFixed(2)
                }else if(inp.name === 'eur'){
                    som.value = (inp.value * response.valute.eur).toFixed(2)
                }

            })
        })
    })
}

converter()

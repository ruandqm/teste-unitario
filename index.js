//parte 1

function combustivelPorKm(metros, tipoCombustivel) {
    if (Number.isInteger(metros) && metros >= 0) {
        let rendimento
        let litros
        function calcularRendimento() {
            if (tipoCombustivel === 'gasolina') {
                rendimento = 16000
            }
            if (tipoCombustivel === 'etanol') {
                rendimento = 11000
            }
            else {
                throw 'o combustivel precisa ser gasolina ou etanol'
            }
        }
        try {
            calcularRendimento()
            litros = metros / rendimento
            return (litros.toFixed(2))
        }
        catch (err) {
            console.error('Erro: ', err)
        }
    }
    else {
        console.error('Erro: a distância deve ser um número inteiro positivo')
    }
}


//parte 2

function numParadas(adultosCriancas, tempo) {

    function validar() {
        for (let i = 0; i < adultosCriancas.length; i++) {
            if (adultosCriancas[i] != 'adulto' && adultosCriancas[i] != 'crianca') {
                throw 'o array só pode receber valores "adulto" ou "crianca"'
            }
        }
        if (!(tempo % 1 === 0)) {
            throw 'o tempo deve ser float'
        }
        if (tempo < 0) {
            throw 'o tempo deve ser um valor positivo'
        }
    }

    try {
        validar()

        let adultos = 0
        let criancas = 0
        let paradas
        for (let i = 0; i < adultosCriancas.length; i++) {
            if (adultosCriancas[i] === "adulto") {
                adultos++
            }
        }

        criancas = adultosCriancas.length - adultos
        if (criancas === 0) {
            paradas = Math.trunc((tempo * 60) / 90)
        }
        if (criancas != 0) {
            paradas = Math.trunc(tempo)
        }
        if (criancas > adultos) {
            paradas = Math.trunc((tempo * 60) / 40)
        }
        console.log(paradas)
    }
    catch (err) {
        console.error('Erro: ', err)
    }
}


//parte 3

function refeicoes(paradas, passageiros) {
    let adultos = 0
    let criancas = 0
    let completas = 0
    let leves = 0
    let completa = true
    let gastoCriancas
    let gastoAdultos

    for (let i = 0; i < passageiros.length; i++) {  //calcular numero de adultos
        if (passageiros[i] === "adulto") {
            adultos++
        }
    }

    criancas = passageiros.length - adultos  //calcular numero de criancas

    for (let i = 0; i < paradas; i++) {  //calcular numero de refeicoes completas e leves
        if (completa === true) {
            completas++
            completa = false
        }

        if (leves === completas + 2) {
            completa = true
        }
        if (completa === false) {
            leves++
        }
    }
    //calcular gasto por adultos e criancas
    gastoAdultos = adultos * (leves * 30 + completas * 50)
    gastoCriancas = criancas * (leves * 20 + completas * 40)

    //calcular gasto total
    let gastoTotal = gastoAdultos + gastoCriancas
    console.log('R$ ' + gastoTotal)
}

//chamadas 

combustivelPorKm(20000, 'etanol')
numParadas(["adulto", "crianca", "crianca"], 4.0)
refeicoes(4, ["adulto", "crianca", "crianca"])

module.exports = { combustivelPorKm }
module.exports = { numParadas }
module.exports = { refeicoes }
function jouleToKilojoule(number){
    return number / 1000
}

function jouleToGramcalorie(number){
    return (number / 4.184).toFixed(6)
}

function jouleToKilocalorie(number){
    return (number / 4184).toFixed(9)
}

function jouleToWatthour(number){
    return (number / 3600).toFixed(9)
}

function jouleToKilowatthour(number){
    return number / 36000000
}

function jouleToEletronVolt(number){
    return number * 6242000000000000000000
}

function jouleToBtu(number){
    return (number / 1055).toFixed(9)
}

function jouleToTherm(number){
    return number / 105500000000
}

function jouleToFootpoundforce(number){
    return (number / 1.356).toFixed(6)
}

export default {
    jouleToKilojoule, 
    jouleToGramcalorie, 
    jouleToKilocalorie, 
    jouleToWatthour,
    jouleToKilowatthour, 
    // jouleToEletronVolt, 
    jouleToBtu, 
    jouleToTherm, 
    jouleToFootpoundforce
}

let lengthDisplay = document.getElementById('length-conversion-el')
let volumeDisplay = document.getElementById('volume-conversion-el')
let massDisplay = document.getElementById('mass-conversion-el')

function convert() {
    let inputValue = document.getElementById('number-input').value

    // length conversion
    let feet = inputValue * 3.28084;
    let meters = inputValue / 3.28084;
    lengthDisplay.innerHTML = `${inputValue} meters = ${feet.toFixed(3)} feet | ${inputValue} feet = ${meters.toFixed(3)} meters`

    // volume conversion
    let gallons = inputValue * 0.264172;
    let liters = inputValue / 0.264172;
    volumeDisplay.innerHTML = `${inputValue} liters = ${gallons.toFixed(3)} gallons | ${inputValue} gallons = ${liters.toFixed(3)} liters`

    // mass conversion
    let pounds = inputValue * 2.20462
    let kilos = inputValue / 2.20462
    massDisplay.innerHTML = `${inputValue} kilos = ${pounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilos.toFixed(3)} kilos`
}


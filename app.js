document.addEventListener('DOMContentLoaded', function() {
    const unitSwitch = document.getElementById('unitSwitch');
    const unitLabel = document.getElementById('unitLabel');
    const inputValue = document.getElementById('inputValue');
    const outputValue = document.getElementById('outputValue');
    function convertTemperature(){
        let value = parseFloat(inputValue.value);
        if (isNaN(value)){
            outputValue.value = '';
            return;
        }
        if (unitSwitch.checked){
            outputValue.value = ((value * 9 / 5) + 32).toFixed(2) + ' °F';
            unitLabel.textContent = 'Fahrenheit';
        } else{
            outputValue.value = ((value - 32) * 5 / 9).toFixed(2) + ' °C';
            unitLabel.textContent = 'Celsius';
        }
    }
    inputValue.addEventListener('input', convertTemperature);
    unitSwitch.addEventListener('change', convertTemperature);
});
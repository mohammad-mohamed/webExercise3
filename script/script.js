let sum = '';

function evaluateSum() {
    const output = document.getElementById('output');
    try {
        let result = eval(sum);
        result = Math.round(result * 100) / 100;
        output.value = result;
        sum = result.toString(); 
    } catch (error) {
        output.value = 'Error';
    }
}


function clearSum() {
    const output = document.getElementById('output');
    sum = '';
    output.value = '';
}

function handleClick(value) {
    const output = document.getElementById('output');

    if (value === 'CE') {
        clearSum();
    } else if (value === '=') {
        evaluateSum();
    } else if (value === 'DE') {
        sum = sum.slice(0, -1);
        output.value = sum;
    } else {
        if ('+-*/.'.includes(value) && sum.includes(value)) {
            return;
        }
        
        sum += value;
        output.value = sum;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            handleClick(button.value);
        });
    });
});

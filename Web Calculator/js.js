function clearResult() {
    document.getElementById('result').value = '';
}

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Hata';
    }
}

function result() {
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let d = parseFloat(document.getElementById('d').value)
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || a <= 0 || b <= 0 || c <= 0 || d <= 0) {
        document.getElementById('result').innerText = "Неверный формат данных";
    } else {
        if ((a <= c && b <= d) || (a <= d && b <= c)) {
            document.getElementById('result').innerText = "Ответ: Можно!";
        } else {
            document.getElementById('result').innerText = "Ответ: Нельзя!";
        }
        document.getElementById('a').readOnly = true;
        document.getElementById('b').readOnly = true;
        document.getElementById('c').readOnly = true;
        document.getElementById('d').readOnly = true;
        res = document.getElementById('result').innerText
        document.getElementById('answer').value = res;
        document.getElementById('submit').disabled = false;
    }
}
function resetForm() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('d').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('submit').disabled = true;
    document.getElementById('a').readOnly = false;
    document.getElementById('b').readOnly = false;
    document.getElementById('c').readOnly = false;
    document.getElementById('d').readOnly = false;
    document.getElementById('answer').value = '';
}
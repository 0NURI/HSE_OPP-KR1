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
        document.getElementById('a').disabled = true;
        document.getElementById('b').disabled = true;
        document.getElementById('c').disabled = true;
        document.getElementById('d').disabled = true;
        res = document.getElementById('result').innerText
        document.getElementById('submit').disabled = false;
        document.getElementById('answer').value = res;
    }
}
function resetForm() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('d').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('submit').disabled = true;
    document.getElementById('a').disabled = false;
    document.getElementById('b').disabled = false;
    document.getElementById('c').disabled = false;
    document.getElementById('d').disabled = false;
    document.getElementById('answer').value = '';
}
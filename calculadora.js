function insert (num) {
    var n = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = n + num;
}

function clean () {
    document.getElementById('resultado').innerHTML = ""; 
}

function back () {
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1);
}

function calculate () {
    var res = document.getElementById('resultado').innerHTML;
    if (res) {
        document.getElementById('resultado').innerHTML = eval(res);
    } 
    else {
        document.getElementById('resultado').innerHTML = "Nada para calcular.!";
    }
}
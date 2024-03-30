function calC() {
    const x = document.getElementById('score').value
    const h2element = document.getElementById('showGrade');
    if (x < 0) {
        alert("Value should be over 0");
        h2element.innerHTML = "";
        return;
    }
    if (x > 100) {
        alert("Value should be under 100");
        h2element.innerHTML = ""
        return;
    }
    if ((x < 50)) {
        h2element.innerHTML = "F"
    }
    if ((x > 49) && (x < 60)) {
        h2element.innerHTML = `D`
    }
    if ((x > 59) && (x < 70)) {
        h2element.innerHTML = `C`
    }
    if ((x > 69) && (x < 80)) {
        h2element.innerHTML = `B`
    }
    if (x > 79) {
        h2element.innerHTML = `A`
    }
}







function pourcoffee(x) {
    x.classList.toggle("bi-cup-hot")
}
function showHide() {
    let x = document.getElementById("hidden")
    if (x.style.display==="block"){
        x.style.display="none"
    } else {
        x.style.display="block"
    }
}
function swap() {
    let x = document.getElementById("tekstas")
    if (x.innerHTML==="labas"){
        x.innerHTML="sveiki visi"
    } else {
        x.innerHTML="labas"
    }
}
function addclass() {
    let x = document.getElementById("manotekstas")
    x.classList.toggle("manostilius")
}
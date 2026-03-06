AOS.init({
duration:1000,
once:true
});
AOS.init({
duration:1000,
once:true
});

const text = "Recrutamento estratégico para empresas que buscam excelência.";
let index = 0;

function type(){

if(index < text.length){

document.getElementById("typing-text").innerHTML += text.charAt(index);

index++;

setTimeout(type,40);

}

}

window.onload = type;
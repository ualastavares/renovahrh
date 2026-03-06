
function login(){

let usuario = document.getElementById("email").value;
let senha = document.getElementById("senha").value;

const usuarioAdmin = "admin";
const senhaAdmin = "123";

if(usuario === usuarioAdmin && senha === senhaAdmin){

localStorage.setItem("adminLogado","true");
window.location.href = "admin.html";

}else{

document.getElementById("erro").innerText = "Usuário ou senha inválidos";

}

}

function logout(){

localStorage.removeItem("adminLogado");
window.location.href = "index.html";

}

function cadastrarVaga(){

let titulo = document.getElementById("titulo")?.value;
let empresa = document.getElementById("empresa")?.value;
let local = document.getElementById("local")?.value;
let descricao = document.getElementById("descricao")?.value;

if(!titulo) return;

let vagas = JSON.parse(localStorage.getItem("vagas")) || [];

vagas.push({titulo,empresa,local,descricao});

localStorage.setItem("vagas", JSON.stringify(vagas));

alert("Vaga cadastrada com sucesso");

}

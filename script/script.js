function cadastro(){
    window.location.href = "cadastro.html";
}
function login(){
    window.location.href = "index.html";
}

//telefone
const tel = document.getElementById('tel') 

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) 

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor
}

//CPF
var cpf = document.querySelector("#cpf");

cpf.addEventListener("blur", function(){
   if(cpf.value) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
});
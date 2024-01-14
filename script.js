let slider = document.querySelector("#slider");
let botao = document.querySelector("#botao");
let valor = document.querySelector("#valor");
let senha = document.querySelector("#password");
let hide = document.querySelector("#cointainer-password");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{}|;:,.?`~0123456789";

let senha1 = "";

valor.innerHTML = slider.value;

slider.oninput = function(){
    valor.innerHTML = this.value;
}

function gensenha(){
    let pass = "";
    for(i = 0; i < slider.value; i++){
        pass += charset.charAt(Math.random() * charset.length);
    }

    hide.classList.remove("hide");
    senha.innerHTML = pass;
    senha1 = pass;

}

function copy(){
    alert("senha copiada!!");
    navigator.clipboard.writeText(senha1);
}


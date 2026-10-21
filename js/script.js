const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

if(hora <12 ){
    saudacao.textContent = "Bom dia! ☀️";
} else if (hora < 18){
     saudacao.textContent = "Boa tarde! 🌸";

} else{
    saudacao.textContent = "Boa noite! 🌙";
}
   

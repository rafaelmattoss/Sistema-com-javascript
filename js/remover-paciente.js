var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");


    setTimeout(function(){
        event.target.parentNode.remove();
    }, 1000)
   
});

// para removermos um paciente dessa tabela, precisamos pegar trazer a tabela para o mundo do javascript com document.querySelector, logo em seguida precisamos adicionar um escutador de enventos  de duplo clique, e adicionar uma função. o parametro dessa função vai ser o evento, ou seja ( para que essa função seja ativada ela precisar receber o evento "function(event)") logo em seguida vamos adicionar o comando que sera ativado quando a tabela receber o duplo clique, que vai ficar mais ou menos assim event.target.parentNode.remove();, ou seja, "dentro do evento, selecione o alvo, e remova o pai do alvo"




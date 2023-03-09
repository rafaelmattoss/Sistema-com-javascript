
var campoFiltro = document.querySelector("#filtrar-tabela")


campoFiltro.addEventListener("input", function(){

    
    var pacientes = document.querySelectorAll(".paciente")

    if(campoFiltro.value.length > 0){
        for( var u = 0; u < pacientes.length; u++){

            var paciente = pacientes[u]
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent
            var acharNome = new RegExp(campoFiltro.value, "i")
    
            if(!acharNome.test(nome)){
                paciente.classList.add("invisivel")
            } else{
                paciente.classList.remove("invisivel")
            }
    
        }
    } else{

        for( var u = 0; u < pacientes.length; u++){
            var paciente = pacientes[u]
            paciente.classList.remove("invisivel")
        }
        
    }


})




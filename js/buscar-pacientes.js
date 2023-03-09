var botao = document.querySelector("#buscar-pacientes")

botao.addEventListener("click", function(){

    var buscarPacientes = new XMLHttpRequest();

    

    buscarPacientes.open("GET","https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")


    buscarPacientes.addEventListener("load", function(){

        var erro = document.querySelector("#erro-ajax")

        if (buscarPacientes.status == 200){
            erro.classList.add("invisivel")
            var resposta = buscarPacientes.responseText

            var pacientes = JSON.parse(resposta)

            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente)
            });
        } else{
            erro.classList.remove("invisivel")
        }

    })

    buscarPacientes.send();

   



})
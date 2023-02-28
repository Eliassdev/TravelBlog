let formulario = document.getElementById("form");
let mensaje = document.getElementById("subject");

/*DECLARACION DE FUNCION*/

formulario = document.addEventListener("submit", (e) =>{
    e.preventDefault();


    if(mensaje.value != ""){

        Swal.fire({
            icon: 'success',
            text: 'Formulario Enviado',
            
          })
        


    }
    else{
        Swal.fire({
            icon: 'warning',
            text: 'Completa la consulta',
            
        })
    }});
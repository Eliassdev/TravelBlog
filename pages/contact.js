/*DECLARO VARIABLES*/

let formulario = document.getElementById("form");
let mensaje = document.getElementById("subject");

/*DECLARACION DE EVENTO*/

formulario = document.addEventListener("submit", (e) =>{
    e.preventDefault();

/*AGREGO UN CONDICIONAL AL INPUT CON UN SWEET ALERT */
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
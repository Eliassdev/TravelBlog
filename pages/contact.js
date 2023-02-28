/*DECLARO VARIABLES*/

let formulario = document.getElementById("form");
let mensaje = document.getElementById("subject");
let mail = document.getElementById("email");
/*DECLARACION DE ARRAY */

let consultas = []

/* DECLARACION DE OBJETO*/

class Informes{
    constructor(mail, consulta){
        this.mail = mail;
        this.consulta = consulta;
    }
}

/*DECLARACION DE EVENTO*/

formulario = document.addEventListener("submit", (e) =>{
    e.preventDefault();

/*AGREGO UN CONDICIONAL AL INPUT CON UN SWEET ALERT */
    if(mensaje.value != ""){

        let nuevaConsulta = new Informes(mail.value, mensaje.value);
        consultas.push(nuevaConsulta);

        let arreglo_JSON = JSON.stringify(consultas);
        localStorage.setItem("consultas", arreglo_JSON);

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
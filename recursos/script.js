// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    RegistrarPersona();
                    event.preventDefault();
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function RegistrarPersona() {
    let nombres = document.querySelector("#txtnombres").value;
    let apellidos = document.querySelector("#txtapellidos").value;
    let documento = document.querySelector("#txtdocumento").value;
    let edad = document.querySelector("#txtedad").value;
    let genero = document.querySelector("#ddlgenero").value;
    let correo = document.querySelector("#txtcorreo").value;
    let telefono = document.querySelector("#txttelefono").value;
    // let estado = document.querySelector("#txtestado").value;

    // if(estado=="true"){
    //     estadoBool=true;
    // }else{
    //     estadoBool=false;
    // }

    let url = "http://localhost:3000/personas";
    let datos = {
        nombres: nombres,
        apellidos: apellidos,
        documento: documento,
        edad: Number(edad),
        genero: genero,
        correo: correo,
        telefono: telefono
    };

    fetch(url,{
        method: "POST",
        body:JSON.stringify(datos),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
    .then(mensaje=>{
        console.log(mensaje);
    });




}
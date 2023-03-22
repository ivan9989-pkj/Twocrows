const formulario=document.querySelector(".formulario");
console.log(formulario);

const  email=document.querySelector("#email");
const mensaje=document.querySelector("#mensaje");
const datos={
    email:"",
    mensaje:"",

};

email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

function leerTexto(e){
    console.log(e);
    datos[e.target.id]=e.target.value;

}


formulario.addEventListener('submit' , function(e){
    e.preventDefault();

    const email=datos.email;
    const mensaje=datos.mensaje;

    if(email==="" || mensaje===""){
        console.log("al menos hay un campo vacío");
        mostrarError("Todos los campos son obligatorios");
    
        return;
    }

    console.log("Hasta aqui todo bien");
    mostrarMensaje("Formulario enviado crack");
})


function mostrarError(mensaje){
    const alerta=document.createElement("p");
    alerta.textContent=mensaje;
    alerta.classList.add("red");
    formulario.appendChild(alerta);
    setTimeout(()=>{alerta.remove();},2000)
}
function mostrarMensaje(mensaje){
    const alerta=document.createElement("p");
    alerta.textContent=mensaje;
    alerta.classList.add("green");
    formulario.appendChild(alerta);
}


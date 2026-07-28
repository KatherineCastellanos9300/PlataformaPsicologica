function validarLogin(event){
event.preventDefault();

    let usuario = document.getElementById("usuario").value;

    let clave = document.getElementById("clave").value;


    if(usuario === "kath" && clave === "0000"){

        window.location.href = "inicio.html";

    }else{

        alert("Usuario o contraseña incorrectos");

    }

}

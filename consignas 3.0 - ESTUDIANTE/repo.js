const nombreLabel = document.getElementById('nombre')
const edadLabel = document.getElementById('edad')
const ciudadLabel = document.getElementById('ciudad')
const javascriptLabel = document.getElementById('javascript')

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 datosPersona.nombre= prompt('Ingrese su nombre')
 const date = new Date()
 datosPersona.edad= parseInt(date.getFullYear()) - parseInt(prompt('Ingrese su año de nacimiento'))
 datosPersona.ciudad= prompt('Ingrese su ciudad')
 datosPersona.interesPorJs= confirm('Estas interesado en JS?')

 console.log(datosPersona);
 console.log(date);
}

// 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


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  da

  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  


}


function recorrerListadoYRenderizarTarjetas() {}
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
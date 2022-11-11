/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

const nombreLabel = document.getElementById('nombre')
const edadLabel = document.getElementById('edad')
const ciudadLabel = document.getElementById('ciudad')
const javascriptLabel = document.getElementById('javascript')
const fila = document.getElementById('fila')
const sitio = document.getElementById('sitio')


function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre= prompt('Ingrese su nombre')
  const date = new Date()
  datosPersona.edad= parseInt(date.getFullYear()) - parseInt(prompt('Ingrese su año de nacimiento'))
  datosPersona.ciudad= prompt('Ingrese su ciudad')
  datosPersona.interesPorJs= confirm('Estas interesado en JS?')? "Sí" : "No"
  
}

        

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
 nombreLabel.innerText=datosPersona.nombre
 edadLabel.innerText=datosPersona.edad
 ciudadLabel.innerText=datosPersona.ciudad
javascriptLabel.innerText=datosPersona.interesPorJs
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
 fila.innerHTML= '';

  listado.forEach(e => {fila.innerHTML+=
    `<span class='caja' > 
      <img src= "${e.imgUrl}" alt="${e.lenguajes}" "/>
      <p style= "text-align: center;">${e.lenguajes}</p> 
      <p style="text-align">${e.bimestre}</p>
    </span>
    `
  });

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  sitio.classList.toggle("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

function verTexto(){
  const sobreMi = document.querySelector('#sobre-mi')
  window.addEventListener("keydown", (event)=> {
    let tecla= event.key
    if (tecla === "f" || tecla === "F") {
      sobreMi.removeAttribute("class")
  }
  } )
  
}
verTexto()

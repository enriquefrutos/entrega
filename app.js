let info = localStorage.getItem('clientes');
let adato = JSON.parse(info);
function recuperar() {
if (adato) {let li = document.createElement("li");
li.innerHTML = adato;
pad.append(li);
}}
recuperar(adato);
listaamigos = [];
function agregaramigo (nombre,apellido){
  var nuevoamigo = {
    nombre : nombre,
    apellido : apellido
  };
listaamigos.push(nuevoamigo);
}

function guardarTodo(clientes){
    let mitransaccion = JSON.parse(localStorage.getItem('clientes')) || [];
    mitransaccion.push(clientes)
    let transacarray = JSON.stringify(mitransaccion);
    localStorage.setItem('clientes',transacarray)
}
let boton = document.getElementById ('formulario')
boton.addEventListener('submit', validarformulario);

function validarformulario (e){
    e.preventDefault();
    swal({
        title: "Terminado!",
        text: "Se completo el registro",
        icon: "success",
        button: "Listo",
      })
    let datos = e.target
    let li = document.createElement("li");
    li.innerHTML = datos.children[0].value + ' ' + datos.children[1].value;
    padre.append(li);
    localStorage.setItem("clientes", JSON.stringify(datos.children[0].value + ' ' + datos.children[1].value));
    let nombre = datos.children[0].value
    let apellido = datos.children[1].value
    let clientes = [nombre, apellido]
    agregaramigo(nombre,apellido)

    //ternario
    apellido ? alert(`sr ${apellido +' ' + nombre} se pudo registrar`)  :
        alert("no te pudiste registrar");
        //desestructuracion
        const [a,b] = clientes
        alert(`desestructuracion ${a + ' ' + b}`)
        //spread
    let clientes1 = [...clientes]
    alert(`spread, copia ${clientes1}`);
    

const pedirDatos = async () => {
  const respuesta = await fetch('./data.json');
  const data = await respuesta.json();
  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `${post.nombre + ' ' + post.apellido}
    `;
    padre.append(li);
  });
};
pedirDatos();
let almacenado = localStorage.getItem('clientes')
if (clientes){
  lista = JSON.parse(almacenado);
}


function redi() {if (clientes) {
   window.location.href = './inicio.html'
  }}
   setTimeout(redi,5000);

  };







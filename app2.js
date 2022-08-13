let infototal = localStorage.getItem('total');
let ainfo = JSON.parse(infototal);
function totalinfo(){
  if (ainfo) {let li = document.createElement("li");
  li.innerHTML = `Ya en el carrito: $${ainfo}`;
  total.append(li);
  }
}
totalinfo(ainfo);

let botond = document.getElementById('botond')
botond.addEventListener('click',verpelis);
function verpelis(){
    const pedirDatos = async () => {
      const respuesta = await fetch('./data.json');
      const data = await respuesta.json();
      data.forEach((post) => {
        const li = document.createElement("li");
        li.innerHTML = `${post.titulo + ' ' + post.año}
        `;
        todPelis.append(li);
      });
      ;
    };
if (todPelis.hasChildNodes()){ }
else {   
pedirDatos();}}

let suma = 0;
let nuevototal =0;
let comprar = document.getElementById('compras')
let totalcompra = document.createElement ("li");
comprar.addEventListener('click', comprarentrada);
function comprarentrada (){
  suma += 1500
  nuevototal = ainfo + suma
totalcompra.innerHTML = `Total compra: $${nuevototal}`;
total.append(totalcompra);
localStorage.setItem("total", suma)
if (nuevototal) {
  localStorage.setItem("total", nuevototal)
}
}
let borrar = document.getElementById('borrar')
borrar.addEventListener('click', limpiar);
function limpiar  (nuevototal){
  if (nuevototal){
  localStorage.removeItem("total")}
}
  

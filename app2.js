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
pedirDatos();}
    
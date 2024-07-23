const divComentarios = document.getElementById("divComentarios");
const listaComentario = "json/comentarios.json";

fetch(listaComentario)
  .then(respuesta => respuesta.json())
  .then(datos => {
    let comentariosHTML = "";
    datos.forEach(comentario => {
      comentariosHTML += `
        <details>
          <summary>${comentario.id} - ${comentario.nombre}</summary>
          <p>${comentario.Comentario}</p>
        </details>
        <hr>
      `;
    });
    divComentarios.innerHTML = comentariosHTML;
    localStorage.setItem("comentarios", JSON.stringify(datos));
  })
  .catch(error => console.log(error));

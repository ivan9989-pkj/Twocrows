
const requestURL = './json.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();


request.onload = function() {
  const jsonData = JSON.parse(request.response);
  const section = document.createElement('imagen-enlace');
  section.classList.add('imagen-enlace');


  for (const data of jsonData) {
    const imagenURL = data.imagen;
    const enlaceURL = data.enlace;

    const imagen = document.createElement('img');
    imagen.src = imagenURL;

    const enlace = document.createElement('a');
    enlace.href = enlaceURL;
    enlace.appendChild(imagen);

    section.appendChild(enlace);
  }

  document.body.appendChild(section);
}
 






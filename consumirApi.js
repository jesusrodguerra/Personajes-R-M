document.getElementById('boton').addEventListener('click', mostrarMas);

async function cargar(){
    const url = 'https://rickandmortyapi.com/api/character/';

    const obtenerUrl = await fetch(url)

    const res = await obtenerUrl.json()

    const datos = res.results;

    let html = "";

    datos.forEach(data => {
        html += `
        <div class="col-sm-4 mb-4">
            <div class="card" style="width:200px;">
                <img class="card-img-top" src="${data.image}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${data.name}</h4>
                        <p class="card-text">Status: ${data.status}. Species: ${data.species}.</p>
                    </div>
            </div>
        </div> 

    `
    });

    document.getElementById('resultado').innerHTML = html;

}

cargar();

async function mostrarMas(){
    const urlDos = 'https://rickandmortyapi.com/api/character/?page=3';

    const obtenerUrlDos = await fetch(urlDos)

    const resDos = await obtenerUrlDos.json()

    const datosDos = resDos.results; 

    let htmlDos = "";

    datosDos.forEach(data => {
        htmlDos += `
                        <div class="col-sm-4 mb-4">
                            <div class="card" style="width:200px;">
                            <img class="card-img-top" src="${data.image}" alt="Card image">
                            <div class="card-body">
                                <h4 class="card-title">${data.name}</h4>
                                <p class="card-text">Status: ${data.status}. Species: ${data.species}.</p>
                                </div>
                            </div>
                        </div>
    `
    });

    document.getElementById('resultadoDos').innerHTML = htmlDos;

}
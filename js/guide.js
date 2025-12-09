const guideContainer = document.getElementById("contenedor");

class guide {
    constructor(dataConsola, dataFecha, img, titulo, link) {
        this.dataConsola = dataConsola;
        this.dataFecha = dataFecha;
        this.img = img;
        this.titulo = titulo;
        this.link = link;
    }
};

const guides = [
    new guide("ps2", "", "../assets/portadas/kh1ps2.jpg", "Kingdom Hearts"),
    new guide("ps2", "", "../assets/portadas/recodeveronicax.jpg", "Resident Evil: Code Veronica X", "../html/guias/recodeveronica.html"),
    new guide("ps3", "", "../assets/portadas/ds2.jpg", "Dark Souls 2: Scholar of the First Sin"),
    new guide("ps2", "", "../assets/portadas/crash-twinsanity.jpg", "Crash Twinsanity"),
    new guide("ps2", "", "../assets/portadas/dbz-bt-3.jpg", "DBZ: Budokai Tenkaichi 3"),
    new guide("ps2", "", "../assets/portadas/dmc.jpg", "Devil May Cry"),
    new guide("ps2", "", "../assets/portadas/god-of-war.jpg", "God of War"),
    new guide("ps2", "", "../assets/portadas/jak-daxter.jpg", "Jak and Daxter"),
    new guide("ps2", "", "../assets/portadas/kh2fmps2.jpg", "Kingdom Hearts 2: Final Mix"),
    new guide("ps2", "", "../assets/portadas/kh-com-ps2.jpg", "Kingdom Hearts Chain of Memories"),
    new guide("ps2", "", "../assets/portadas/persona3.jpg", "Persona 3"),
    new guide("ps2", "", "../assets/portadas/hl2.jpg", "Half Life 2"),
];


function crearCardGuia(portada,title){
    return `
        <a href="#" target="_blank" rel="noopener noreferrer" class="href-normalizado">
            <img src="${portada}" alt="${title}" class="guide-portada">
             <p>${title}</p>
        </a> 
    `;
}

const fragmento = document.createDocumentFragment();

function agregarGuia(){
    for (let i = 0; i < 12; i++) {
        let div = document.createElement("div");
        div.classList.add("guide-card-popular","escala");
        div.dataset.consola = guides[i].dataConsola;
        div.dataset.fecha = guides[i].dataFecha || "";
        div.tabIndex = i + 1;

        let guia = crearCardGuia(guides[i].img,guides[i].titulo);
        div.innerHTML = guia;
        fragmento.appendChild(div);
    };
    guideContainer.appendChild(fragmento);
}

agregarGuia();

//Agregar funcionalidad al botón de "Ver más"

let btnExpandir = document.getElementById("expandir");

let currentIndex = 12;   // comienza desde la guía Nº13
const batchSize = 4; // número de guías a agregar por clic

function agregarGuiaDesdeIndex(inicio, cantidad) {
    const fragmento = document.createDocumentFragment();

    const fin = Math.min(inicio + cantidad, guides.length);

    for (let i = inicio; i < fin; i++) {
        let div = document.createElement("div");
        div.classList.add("guide-card-popular","escala");
        div.dataset.consola = guides[i].dataConsola;
        div.dataset.fecha = guides[i].dataFecha || "";
        div.tabIndex = i + 1;

        let guia = crearCardGuia(guides[i].img, guides[i].titulo, guides[i].link);
        div.innerHTML = guia;

        fragmento.appendChild(div);
    }

    guideContainer.appendChild(fragmento);
}

btnExpandir.addEventListener("click", () => {

    agregarGuiaDesdeIndex(currentIndex, batchSize);

    currentIndex += batchSize;  

    // Si ya no quedan más guías, desactivar u ocultar el botón
    if (currentIndex >= guides.length) {
        btnExpandir.disabled = true; 
        btnExpandir.textContent = "No hay más guías";
    }
});


const prod = [
    {
        id: "0",
        nombre: "Teclado Gamer Razer Deathstalker V2 Pro",
        img: [
            '1A3V5CULTREusCvBoItwMwqI7EoGT-q8M',
            '1sQCCorK9nmh6O2awzK1VBokOUWEt-u1p',
            '1hYI8eLI4Rz0oc3vRwjEHjdLiDV15yd8H',
            '1xlgwj-BTS1Y8M6mdbHFJJwugqlWv2CAo',
        ],
        alt: "teclado gamer razer",
        precio: ["434.999", "580.000", "25"],
        disponibles: 25,
        descripcion: [
            "Layout: Español España",
            "Color de la retroiluminación: RGB",
            "Color del teclado: Negro",
            "Ergonómico y apto para diversos usos.",
            "Contiene teclado numérico.",
            "Con conector USB-C.",
            "Medidas: 14cm de ancho, 2.6cm de alto y 35cm de profundidad."
        ],
        descripcion_larga: ["Dentro del mundo gamer, hablar de Razer es sinónimo de buena reputación y trayectoria. Esta compañía ofrece productos de muy alta calidad a sus usuarios. Su línea de teclados es reconocida por haber recibido distintos galardones y premios internacionales por su alto desempeño", "Distinción a todo color Su retroiluminación da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados"],
        categoria: ["perifericos", "teclado"]
    },
    {
        id: "1",
        nombre: "Notebook Asus Core I3 Ultrabook 8gb 15.6 + Ssd 480gb",
        img: [
            '1d6LHZ3lOvLLsHyOIWK1-QT6FgfJkSwIC',
            '1jUEdQcuwTDt1cu5H_IMqW0JwZWOXAyif',
            '1RiXU1Srj4kVJC2cZ9e0J1BCShPqRc2o6',
            '1gWNLZG6H8EUcIokcnV_xYWAxOZs5YPGy',
        ],
        precio: ["793.499", "1.100.000", "27"],
        disponibles: 8,
        descripcion: [
            "Con pantalla táctil: No",
            "Resolución de 1366x768 px.",
            "Conexión wifi y bluetooth.",
            "Cuenta con puerto USB y puerto HDMI."
        ],
        descripcion_larga: [
            "La Notebook Asus Core I3 Ultrabook 8gb 15.6 + Ssd 480gb Gamer Color Gris es la elección perfecta para aquellos que buscan un rendimiento excepcional y una experiencia de juego inigualable. Con su potente procesador Intel Core i3 y 8 GB de memoria RAM DDR4, podrás disfrutar de un rendimiento fluido y sin interrupciones en todas tus tareas diarias.",
            'Su pantalla LED de 15.6"con una resolución de 1366 px x 768 px te brindará imágenes nítidas y colores vibrantes, mientras que su frecuencia de actualización de 60 Hz garantiza una reproducción suave de tus juegos y videos favoritos. Además, su disco SSD de 480 GB te ofrece un almacenamiento rápido y confiable para tus archivos y juegos',
            'Esta notebook también cuenta con características especiales para los amantes de los videojuegos. Su diseño gamer y su capacidad de respuesta te permitirán sumergirte en tus juegos favoritos con una calidad gráfica impresionante. Además, su batería de ion de litio te brinda una autonomía prolongada para que puedas jugar durante horas sin preocuparte por quedarte sin energía.',
            'Con su conectividad Bluetooth, HDMI, USB y Wi-Fi, podrás conectar tus dispositivos y accesorios fácilmente. También cuenta con una cámara web y un micrófono incorporados para que puedas realizar videollamadas y conferencias con una excelente calidad de audio y video.'],
        categoria: ["computadoras", "notebook"]
    },
    {
        id: "2",
        nombre: "Pc Armada Gamer Amd Ryzen 3 3200g 16gb 480gb Ssd Kit",
        img: [
            '1HSK8PAMmNW2CfmKRm_zZwthe3M1xf52-',
            '1MaLtEP9oK0QskKF-lD2IakTEJZu5K_Dw',
            '1ohqs_QUUpXdpWMdy6er3SpMIFPMzGtyf',
            '1UGDjsh02_8T-QyTBp_-M1oVyQcus2O6V'
        ],
        precio: ["359.999", "441.460", "18"],
        disponibles: 4,
        descripcion: [
            "AMD Ryzen 3 3200G",
            "Gigabyte A520M",
            "Disco duro 256 GB",
        ],
        descripcion_larga: [
            "NO PIERDAS TIEMPO! Y COMPRA LA MEJOR PC GAMER!!! JUGA A TODOS LOS JUEGOS! FIFA 2023 - GTA 5 - LOL - FORTNITE - PUGB!!",
            "MICRO: AMD RYZEN 3 3200G CON COOLER BOX...",
            " MOTHER: ASROCK/ECS/MSI A320 (se entrega segun disponibilidad de stock)",
            "DISCO RIGIDO: 240GB SATA3 ADATA...",
            "MEMORIA RAM: 8GB 2666MHZ DDR4...",
            "GABINETE: BRB G28 + TECLADO + MOUSE + PARLANTES + FUENTE 500W",
            "NO INCLUYE: MONITOR, NI DVD...",
        ],
        categoria: ["computadoras", "escritorio"]
    }
]

//FUNCIONES AUXILIARES PARA CREAR ELEMENTOS
function createLi(clase = "") {
    const list = document.createElement("li");
    list.className = clase;
    return list;
}
function createP(cont) {
    const p = document.createElement("p");
    p.innerText = cont;
    return p;

}
function createDiv(clase) {
    const div = document.createElement("div");
    div.className = clase;
    return div;
}
function createHr() {
    const hr = document.createElement("hr");
    return hr;
}
function createOl() {
    const ol = document.createElement("ol");
    return ol;
}
function createH3(value) {
    const h3 = document.createElement("h3")
    h3.innerText = value
    return h3;
}
function createImg(imagen, alt, clase = "") {

    const div = document.createElement("div");
    const img = document.createElement("img");

    // Añadir clases y atributos
    div.className = clase;
    img.src = "https://lh3.googleusercontent.com/d/" + imagen;
    img.alt = alt;

    div.appendChild(img);

    return div;
}
function createImg2(imagen, alt) {

    const img = document.createElement("img");
    // Añadir clases y atributos
    img.src = "https://lh3.googleusercontent.com/d/" + imagen;
    img.alt = alt;
    return img;
}
function createName(name, href) {
    const h4 = document.createElement("h4");
    const a = document.createElement("a");

    h4.className = "productos-nombre";
    h4.id = "data-nombre";
    a.href = href;
    a.className = "link-comprar";
    a.innerHTML = name;

    h4.appendChild(a);

    return h4;
}
function createPrice(precio, oferta, desc) {

    const div = document.createElement("div");
    const h5 = document.createElement("h5");
    const h6 = document.createElement("h6");
    const p = document.createElement("p");


    if (desc > 25) {
        div.className = "productos-descuento hot";
        h6.innerHTML = "HOT " + desc + "%"
    }
    else {
        div.className = "productos-descuento";
        h6.innerHTML = desc + "% OFF";
    }
    h6.className = "data-off";
    h5.className = "data-oferta";
    h5.innerHTML = "$" + oferta;
    p.className = "data-precio";
    p.innerHTML = "$" + precio;

    div.appendChild(h5);
    div.appendChild(h6);
    div.appendChild(p);

    return div;
}
function createBtn(identif, href) {

    const a = document.createElement("a");
    const btn = document.createElement("button");

    a.href = href;
    a.className = "link-comprar";
    btn.className = "productos-boton";
    btn.textContent = "Comprar";
    btn.id = identif;

    a.appendChild(btn);
    return a;
}
function createCuotas(valor) {
    const h5 = document.createElement("h5")
    // <h5 class="productos-cuotas">Mismo precio en 6 cuotas de $67.995</h5>
    h5.className = "productos-cuotas";
    for (let i = 0; i < valor.length; i++) {
        valor = valor.replace(".", '')
    }
    precio = parseInt(valor)

    h5.textContent = "Mismo precio en 12 cuotas de $" + precio / 10;
    return h5;
}

// funcion para crear los ol>li
function producto(prod, clase, links, cant = 3) {
    const ol = document.querySelectorAll(clase);
    const fragment = document.createDocumentFragment(); // Crear un fragmento de documento para agregar los elementos
    const li = [];
    const img = [];
    const h4 = [];
    const precio = [];
    const cuotas = [];
    const boton = [];

    if (prod.length < cant) {
        cant = prod.length;
    }

    for (let j = 0; j < ol.length; j++) {
        for (let i = 0; i < cant; i++) {
            img[i] = createImg(prod[i].img[0], prod[i].alt, "productos-img");
            h4[i] = createName(prod[i].nombre, links);
            precio[i] = createPrice(prod[i].precio[0], prod[i].precio[1], prod[i].precio[2]);
            cuotas[i] = createCuotas(prod[i].precio[1]);
            boton[i] = createBtn(prod[i].id, links);
            li[i] = createLi("productos-card");
            li[i].appendChild(img[i]);
            li[i].appendChild(h4[i]);
            li[i].appendChild(precio[i]);
            li[i].appendChild(cuotas[i]);
            li[i].appendChild(boton[i]);
            fragment.appendChild(li[i]);
        }
        ol[j].appendChild(fragment);
    }

    return ol;
}

// Uso de la función
producto(prod, ".ofertas", "./pages/carrito.html", 4);
producto(prod, ".vendidos", "./pages/carrito.html", 4);
producto(prod, ".productos-main", "carrito.html", 8);
producto(prod, ".productos-secundario", "carrito.html", 8);


// funciones para carrito.html


function obtenerIdBtn(event) {
    const btnId = event.target.id;
    localStorage.setItem('btnCompra', btnId)
}
// Agregamos el evento de clic a todos los botones 
const boton = document.querySelectorAll(".productos-boton");

boton.forEach(boton => {
    boton.addEventListener('click', obtenerIdBtn);
}, false);



// PAGINA DE VENTA
// Capturamos el Id en otra pagina
const btnId = localStorage.getItem('btnCompra')

// RELLENAMOS LOS DATOS EN LA PAGINA DE VENTA
function crearPagVenta(prod, id) {
    let producto;
    for (let i = 0; i < prod.length; i++) {
        if (prod[i].id === id) {
            producto = prod[i];
        }
    }

    const ol_imgIzq = document.querySelector(".carrito-img-izq");
    const imgMain = document.querySelector(".carrito-img-main");
    const titulo = document.querySelector(".carrito-titulo");
    const precio = document.querySelector(".producto-precio")
    const original = document.querySelector(".producto-precio-tachado")
    const disponibles = document.getElementById("disponibles")
    const descripcion = document.querySelector(".carrito-prod-desc")
    const descripcion_larga = document.querySelector(".carrito-descripcion-expandida")
    const hr = createHr();
    const p = []
    const h3 = createH3("Descripción");
    const li = []
    const img = []
    const relacionados = createH3("Productos Relacionados")
    const div = createDiv("carrito-cards-relacionados")
    const ol = createOl()

    // modificamos la ruta de navegacion

    const tipo = document.getElementById("ruta-tipo")
    const especifico = document.getElementById("ruta-especifico")

    tipo.textContent = producto.categoria[0];
    especifico.textContent = producto.categoria[1];

    // imagenes de la izquierda
    for (let i = 0; i < producto.img.length; i++) {
        li[i] = createLi();
        img[i] = createImg2(producto.img[i], producto.alt, "");
        li[i].appendChild(img[i]);
        ol_imgIzq.appendChild(li[i]);
    }

    // imagen principal
    imgMain.appendChild(createImg2(producto.img[0]))


    // nombre precio y caracteristicas prod
    titulo.textContent = producto.nombre
    precio.textContent = producto.precio[0]
    original.textContent = producto.precio[1]
    descripcion.textContent = producto.descripcion // debemos crear ul>li
    disponibles.textContent = producto.disponibles + " disponibles"



    // hacemos toda la parte de abajo
    descripcion_larga.appendChild(hr)
    descripcion_larga.appendChild(h3)

    for (let i = 0; i < producto.descripcion_larga.length; i++) {
        p[i] = createP(producto.descripcion_larga[i])
        descripcion_larga.appendChild(p[i])
    }
    descripcion_larga.appendChild(hr)
    descripcion_larga.appendChild(relacionados)

    // agregamos productos relacionados
    for (let i = 0; i < 9; i++) {
        li[i] = createLi();
        img[i] = createImg2("1SYwihoqHLVBbsedRXO_FiCkDlzXR0x8m", "carrito-relacionado", "");
        li[i].appendChild(img[i]);
        ol.appendChild(li[i]);
    }
    div.appendChild(ol)
    descripcion_larga.appendChild(div)

}


// dibujamos la pagina

crearPagVenta(prod, btnId);


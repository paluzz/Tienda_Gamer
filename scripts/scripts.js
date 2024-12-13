const prod = [
    {
        id: "0",
        nombre: "Teclado Gamer Razer Deathstalker V2 Pro",
        img: ['1xlgwj-BTS1Y8M6mdbHFJJwugqlWv2CAo',
            '1A3V5CULTREusCvBoItwMwqI7EoGT-q8M',
            '1sQCCorK9nmh6O2awzK1VBokOUWEt-u1p',
            '1hYI8eLI4Rz0oc3vRwjEHjdLiDV15yd8H'],
        alt: "teclado gamer razer",
        precio: [434999, 580000, 25],
        disponibles: 5,
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
    },
    {
        id: "1",
        nombre: "Notebook Asus Core I3 Ultrabook 8gb 15.6 + Ssd 480gb",
        img: ['1gWNLZG6H8EUcIokcnV_xYWAxOZs5YPGy',
            '1gWNLZG6H8EUcIokcnV_xYWAxOZs5YPGy',
            '1A3V5CULTREusCvBoItwMwqI7EoGT-q8M',
            '1sQCCorK9nmh6O2awzK1VBokOUWEt-u1p',
        ],
        precio: [793499, 1100000, 27],
        disponibles: 5,
        descripcion: [
            "Layout: Español España",
            "Color de la retroiluminación: RGB",
            "Color del teclado: Negro",
            "Ergonómico y apto para diversos usos.",
            "Contiene teclado numérico.",
            "Con conector USB-C.",
            "Medidas: 14cm de ancho, 2.6cm de alto y 35cm de profundidad."
        ],
        descripcion_larga: ""
    },
    {
        id: "2",
        nombre: "Pc Armada Gamer Amd Ryzen 3 3200g 16gb 480gb Ssd Kit",
        img: ['1HSK8PAMmNW2CfmKRm_zZwthe3M1xf52-',
            '1A3V5CULTREusCvBoItwMwqI7EoGT-q8M',
            '1sQCCorK9nmh6O2awzK1VBokOUWEt-u1p',
            '1xlgwj-BTS1Y8M6mdbHFJJwugqlWv2CAo'],
        precio: [359999, 441460, 18],
        disponibles: 5,
        descripcion: [
            "Layout: Español España",
            "Color de la retroiluminación: RGB",
            "Color del teclado: Negro",
            "Ergonómico y apto para diversos usos.",
            "Contiene teclado numérico.",
            "Con conector USB-C.",
            "Medidas: 14cm de ancho, 2.6cm de alto y 35cm de profundidad."
        ],
        descripcion_larga: ""
    }
]

function createLi(clase) {
    const list = document.createElement("li");
    list.className = clase;
    return list;
}
function createImg(imagen, alt) {

    const div = document.createElement("div");
    const img = document.createElement("img");

    // Añadir clases y atributos
    div.className = "productos-img";
    img.src = "https://lh3.googleusercontent.com/d/" + imagen;
    img.alt = alt;

    div.appendChild(img);

    return div;
}
function createName(name) {
    const h4 = document.createElement("h4");
    const a = document.createElement("a");

    h4.className = "productos-nombre";
    h4.id = "data-nombre";
    a.href = "pages/carrito.html"
    a.innerHTML = name;

    h4.appendChild(a);

    return h4;
}
function createPrice(precio, oferta, desc) {

    const div = document.createElement("div");
    const h5 = document.createElement("h5");
    const h6 = document.createElement("h6");
    const p = document.createElement("p");

    div.className = "productos-descuento";
    h5.className = "data-oferta";
    h5.innerHTML = "$" + oferta;
    h6.className = "data-off";
    h6.innerHTML = desc + "% OFF";
    p.className = "data-precio";
    p.innerHTML = "$" + precio;

    div.appendChild(h5);
    div.appendChild(h6);
    div.appendChild(p);

    return div;
}
function createBtn(identif) {

    const a = document.createElement("a");
    const btn = document.createElement("button");

    a.href = "pages/carrito.html";
    btn.className = "productos-boton";
    btn.textContent = "Comprar";
    btn.id = identif;

    a.appendChild(btn);
    return a;
}
function createCuotas(precio) {
    const h5 = document.createElement("h5")
    // <h5 class="productos-cuotas">Mismo precio en 6 cuotas de $67.995</h5>
    h5.className = "productos-cuotas";
    precio = precio / 10;
    h5.textContent = "Mismo precio en 12 cuotas de $" + precio;
    return h5;
}

// funcion para crear los ol>li
function producto(prod, cant = 3) {
    const ol = document.querySelectorAll(".productos");
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
            img[i] = createImg(prod[i].img[0], prod[i].alt);
            h4[i] = createName(prod[i].nombre);
            precio[i] = createPrice(prod[i].precio[0], prod[i].precio[1], prod[i].precio[2]);
            cuotas[i] = createCuotas(prod[i].precio[1]);
            boton[i] = createBtn(prod[i].id);
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
producto(prod, 5);

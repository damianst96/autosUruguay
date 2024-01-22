const prompt = require('prompt-sync')();

class AlfaRomeo {
    constructor(marca, modelo, version, precio, consultarPrecio){
        this.marca = marca,
        this.modelo = modelo,
        this.version = version,
        this.precio = precio,
        this.consultarPrecio = consultarPrecio,
        this.consultarPrecio = function(){
            return "El " + this.marca + " " + this.modelo + " " + this.version + " cuesta: " + this.precio;
        }
    }
}

class BYD {
    constructor(marca, modelo, version, precio, consultarPrecio){
        this.marca = marca,
        this.modelo = modelo,
        this.version = version,
        this.precio = precio,
        this.consultarPrecio = consultarPrecio,
        this.consultarPrecio = function(){
            return "El " + this.marca + " " + this.modelo + " " + this.version + " cuesta: " + this.precio;
        }
    }
}

class Coradir {
    constructor(marca, modelo, version, precio, consultarPrecio){
        this.marca = marca,
        this.modelo = modelo,
        this.version = version,
        this.precio = precio,
        this.consultarPrecio = consultarPrecio,
        this.consultarPrecio = function(){
            return "El " + this.marca + " " + this.modelo + " " + this.version + " cuesta: " + this.precio;
        }
    }
}

class Porsche {
    constructor(marca, modelo, version, precio, consultarPrecio){
        this.marca = marca,
        this.modelo = modelo,
        this.version = version,
        this.precio = precio,
        this.consultarPrecio = consultarPrecio,
        this.consultarPrecio = function(){
            return "El " + this.marca + " " + this.modelo + " " + this.version + " cuesta: " + this.precio;
        }
    }
}


let giulia20 = new AlfaRomeo("Alfa Romeo", "Giulia", "2.0 Turbo 200 AT8 Distinctive", "U$S 69.900");
let giuliaQ = new AlfaRomeo("Alfa Romeo", "Giulia", "2.9 V6 Bi-Turbo AT8 Quadrifoglio", "U$S 209.990");
let stelvio20 = new AlfaRomeo("Alfa Romeo", "Stelvio", "2.0 Turbo 280 AT8 Super", "U$S 113.490");
let stelvioQ = new AlfaRomeo("Alfa Romeo", "Stelvio", "2.9 V6 Bi-Turbo AT8 Q4 Quadrifoglio", "U$S 214.990");
let autosAlfaRomeo = [giulia20, giuliaQ, stelvio20, stelvioQ];


let seagull30 = new BYD("BYD", "Seagull", "EV300", "U$S 21.990");
let seagull40 = new BYD("BYD", "Seagull", "EV400", "U$S 23.990");
let autosBYD = [seagull30, seagull40];


let tito = new Coradir("Coradir", "Tito", "S2-100", "U$S 16.500");
let chiki = new Coradir("Coradir", "Chiki-Tito", "", "U$S 6.500");
let autosCoradir = [chiki, tito];


let boxster20 = new Porsche("Porsche", "Boxster", "2.0 T PDK", "U$S 155.000");
let autosPorsche = [boxster20];

// CONSULTAR PRECIOS POR MARCA
function preciosAlfaRomeo(){
    for(let i = 0; i < autosAlfaRomeo.length; i++){
        console.log(autosAlfaRomeo[i].consultarPrecio());
    }
}

function preciosBYD(){
    for(let i = 0; i < autosBYD.length; i++){
        console.log(autosBYD[i].consultarPrecio());
    }
}

function preciosCoradir(){
    for(let i = 0; i < autosCoradir.length; i++){
        console.log(autosCoradir[i].consultarPrecio());
    }
}

function preciosPorsche(){
    for(let i = 0; i < autosPorsche.length; i++){
        console.log(autosPorsche[i].consultarPrecio());
    }
}

module.exports = {
    AlfaRomeo, 
    BYD, 
    Coradir, 
    Porsche,
    autosAlfaRomeo,
    autosBYD,
    autosCoradir,
    autosPorsche,
    preciosAlfaRomeo,
    preciosBYD,
    preciosCoradir,
    preciosPorsche
};

module.exports = {
    giulia20, giuliaQ, stelvio20, stelvioQ,
    seagull30, seagull40,
    chiki, tito,
    boxster20
}
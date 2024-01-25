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

class Audi {
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


//CREAR AUTOS
let giulia20 = new AlfaRomeo("Alfa Romeo", "Giulia", "2.0 Turbo 200 AT8 Distinctive", "U$S 69.900");
let giuliaQ = new AlfaRomeo("Alfa Romeo", "Giulia", "2.9 V6 Bi-Turbo AT8 Quadrifoglio", "U$S 209.990");
let stelvio20 = new AlfaRomeo("Alfa Romeo", "Stelvio", "2.0 Turbo 280 AT8 Super", "U$S 113.490");
let stelvioQ = new AlfaRomeo("Alfa Romeo", "Stelvio", "2.9 V6 Bi-Turbo AT8 Q4 Quadrifoglio", "U$S 214.990");
let autosAlfaRomeo = [giulia20, giuliaQ, stelvio20, stelvioQ];


let a3_sp_base = new Audi("Audi", "A3 Sportback", "35 TFSI 1.4 tiptronic", "U$S 49.800");
let a3_sp_adv = new Audi("Audi", "A3 Sportback", "Advanced 35 TFSI 1.4 tiptronic", "U$S 53.400");
let a3_sp_adv_plus = new Audi("Audi", "A3 Sportback", "Advanced Plus 35 TFSI 1.4 tiptronic", "U$S 58.800");
let a3_sp_sLine = new Audi("Audi", "A3 Sportback", "S line 35 TFSI 1.4 tiptronic", "U$S 55.900");
let a3_sp_sLine_plus = new Audi("Audi", "A3 Sportback", "S line Plus 35 TFSI 1.4 tiptronic", "U$S 60.800");
let s3_sp = new Audi("Audi", "S3 Sportback", "2.0 TFSI quattro S tronic", "U$S 96.900");
let autosAudi = [a3_sp_base, a3_sp_adv, a3_sp_adv_plus, a3_sp_sLine, a3_sp_sLine_plus, s3_sp];


let seagull30 = new BYD("BYD", "Seagull", "EV300", "U$S 21.990");
let seagull40 = new BYD("BYD", "Seagull", "EV400", "U$S 23.990");
let autosBYD = [seagull30, seagull40];


let tito = new Coradir("Coradir", "Tito", "S2-100", "U$S 16.500");
let chiki = new Coradir("Coradir", "Chiki-Tito", "CT-45", "U$S 6.500");
let autosCoradir = [chiki, tito];


let boxster20 = new Porsche("Porsche", "Boxster", "2.0 T PDK", "U$S 155.000");
let boxsterS = new Porsche("Porsche", "Boxster S", "2.5 T PDK", "U$S 178.500");
let boxsterGTS = new Porsche("Porsche", "Boxster GTS", "4.0 PDK", "U$S 190.000");
let caymanS = new Porsche("Porsche", "Cayman S", "2.5 T PDK", "U$S 167.500");
let taycan4S = new Porsche("Porsche", "Taycan 4S", "79,2 kWh", "U$S 198.000");
let taycanT = new Porsche("Porsche", "Taycan Turbo", "93,4 kWh", "U$S 220.000");
let taycanGTS = new Porsche("Porsche", "Taycan GTS", "93,4 kWh", "U$S 249.000");
let taycanT_CT = new Porsche("Porsche", "Taycan Turbo Cross Turismo", "93,4 kWh", "U$S 270.000");
let macan20 = new Porsche("Porsche", "Macan", "2.0 T PDK", "U$S 158.000");
let macanS = new Porsche("Porsche", "Macan S", "3.0 V6 Bi-T PDK", "U$S 200.000");
let macanGTS = new Porsche("Porsche", "Macan GTS", "2.9 V6 Bi-T PDK", "U$S 245.000");
let cayenneS = new Porsche("Porsche", "Cayenne S", "2.9 V6 Tiptronic S", "U$S 210.000");
let cayenneCoupe = new Porsche("Porsche", "Cayenne Coupé", "3.0 V6 Tiptronic S", "U$S 200.000");
let turboS = new Porsche("Porsche", "911 Turbo S", "3.8 Coupé Bi-T PDK", "U$S 350.000");
let autosPorsche = [boxster20, boxsterS, boxsterGTS, caymanS, taycan4S, taycanT, taycanGTS, taycanT_CT, macan20, macanS, macanGTS, cayenneS, cayenneCoupe, turboS];


let todosLosAutos = [
    autosAlfaRomeo,
    autosAudi, 
    autosBYD, 
    autosCoradir, 
    autosPorsche
];

// CONSULTAR PRECIOS POR MARCA
function preciosAlfaRomeo(){
    for(let i = 0; i < autosAlfaRomeo.length; i++){
        console.log(autosAlfaRomeo[i].consultarPrecio());
    }
}

function preciosAudi(){
    for(let i = 0; i < autosAudi.length; i++){
        console.log(autosAudi[i].consultarPrecio());
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


// CONSULTAR MODELOS POR MARCA
function consultarModelos(marca){
    console.log("Todos los modelos de " + marca[0].marca);
    marca.forEach(function(auto){
        console.log(auto.modelo + " " + auto.version);
    });
}


// LISTA DE TODOS LOS AUTOS
function autos(){
    for(let i = 0; i < todosLosAutos.length; i++){
        console.log(todosLosAutos[i][0].marca);
        todosLosAutos[i].forEach(function(auto){
            console.log(auto.modelo + " " + auto.version);
        });
        console.log("");
    }
}


// EXPORTACIÓN
module.exports = {
    AlfaRomeo, 
    Audi,
    BYD, 
    Coradir, 
    Porsche,
    autosAlfaRomeo,
    autosAudi,
    autosBYD,
    autosCoradir,
    autosPorsche,
    todosLosAutos,
    preciosAlfaRomeo,
    preciosAudi,
    preciosBYD,
    preciosCoradir,
    preciosPorsche,
    consultarModelos,
    autos
};

module.exports = {
    giulia20, giuliaQ, stelvio20, stelvioQ,
    seagull30, seagull40,
    chiki, tito,
    boxster20, turboS
}
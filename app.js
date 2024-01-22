let autosUruguay = require("./autosUruguay");

function consultarPrecio(auto){
    return "El " + auto.marca + " " + auto.modelo + " " + auto.version + " cuesta: " + auto.precio;
}

console.log(consultarPrecio(autosUruguay.boxster20));
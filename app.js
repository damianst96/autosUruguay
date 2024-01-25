let autosUruguay = require("./autosUruguay");

// CONSULTAR PRECIO DE UN AUTO
function consultarPrecio(auto){
    return "El " + auto.marca + " " + auto.modelo + " " + auto.version + " cuesta: " + auto.precio;
}

autosUruguay.autos;
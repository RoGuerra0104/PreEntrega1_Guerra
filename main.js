const cafe = (tipo, tamaño) => {
    switch (tipo) {
        case "expreso":
            console.log("El café expreso es un tipo de café que contiene mayor cantidad de cafeína por volumen");
            break;
        case "cortado":
            console.log("Es tipo de café cortado a la cual se le agrega una ligera cantidad de leche");
            break;
        case "capuchino":
            console.log("Este tipo de café lo encontraremos con alrededor de un tercio de café, siendo el resto leche");
            break;
        case "frappé":
            console.log("Este tipo de café................................");
            break;
        default:
            console.log("Ingrese un tipo de café valido");
    }

    if (tipo == "expreso"  || tipo == "frappé") {
        tamaño= prompt("Ingrese un tipo de tamaño")
    }

    while (tipo == "expreso" || tipo == "frappé") {
    if (tamaño == "60") {
        console.log("Para su preparación coloque una cucharada de café para una taza de 60 ml")
        break;
    } else if (tamaño == "120") {
        console.log("Para su preparación coloque dos cucharadas de café para una taza de 120 ml");
        break;
    }
    else if (tamaño == "240") {
        console.log("Para su preparación coloque tres cucharadas de café para una taza de 240 ml");
        break;
    } else {
        console.log("coloque un tamaño valido");
        break;
    }
}
}

cafe(prompt("ingrese un tipo de café")); 
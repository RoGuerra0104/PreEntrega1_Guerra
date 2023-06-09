let seguir = true;

const cafe = () => {
    while (seguir) {
        let tipo = prompt("Ingrese un tipo de café");
        switch (tipo) {
            case "expreso":
                console.log("El café expreso es un tipo de café que contiene mayor cantidad de cafeína por volumen");
                calcularTaza("expreso")
                seguir = false;
                break;
            case "cortado":
                console.log("Es tipo de café cortado a la cual se le agrega una ligera cantidad de leche");
                seguir = false;
                break;
            case "capuchino":
                console.log("Este tipo de café lo encontraremos con alrededor de un tercio de café, siendo el resto leche");
                seguir = false;
                break;
            case "frappé":
                console.log("Este tipo de café....................");
                calcularTaza("frappé")
                seguir = false;
                break;
            default:
                console.log("Ingrese un tipo de café válido");
                seguir = true;
        }
    }
}

const calcularTaza = (tipo) => {
    let tamanio = prompt("ingrese un tamaño");
    while (tipo == "expreso" || tipo == "frappé") {
        if (tamanio == "60") {
            console.log("Para su preparación coloque una cucharada de café para una taza de 60 ml")
            break;
        } else if (tamanio == "120") {
            console.log("Para su preparación coloque dos cucharadas de café para una taza de 120 ml");
            break;
        }
        else if (tamanio == "240") {
            console.log("Para su preparación coloque tres cucharadas de café para una taza de 240 ml");
            break;
        } else {
            console.log("coloque un tamaño valido");
            break;
        }
    }
}

cafe();
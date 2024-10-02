function insert(array, elemento, alPrincipio) {

    // verificar si el elemento ya existe en el array
    if (array.includes(elemento)) {
        return array;
    }

    // insertar el elemento
    if (alPrincipio) {
        array.unshift(elemento); // Inserta al principio
    } else {
        array.push(elemento); // Inserta al final
    }

    // devuelve array
    return array;
}

    let array = ["pera", "manzana"];

    console.log(insert(array, "pera", false));       // ["pera", "manzana"]
    console.log(insert(array, "melon", false));      // ["pera", "manzana", "melon"]
    console.log(insert(array, "melocoton", true));   // ["melocoton", "pera", "manzana", "melon"]
// Definir la tasa de conversión de dólares a bolivianos
const tasaConversion = 7; // Por ejemplo, 1 USD = 7 BOB

// Definir las recetas con cantidades en gramos o unidades
const recetas = {
    cheesecake: {
        "Queso crema": { cantidad: 200, costo: 2 }, // 200g a $2 por 1kg
        "Azúcar": { cantidad: 100, costo: 0.5 },    // 100g a $0.5 por 1kg
        "Huevos": { cantidad: 2, costo: 0.3 },       // 2 unidades a $0.3 por docena
        "Galletas": { cantidad: 150, costo: 1 },     // 150g a $1 por 1kg
        "Mantequilla": { cantidad: 50, costo: 0.8 }  // 50g a $0.8 por 1kg
    },
    brownie: {
        "Chocolate": { cantidad: 200, costo: 2 },    // 200g a $2 por 1kg
        "Azúcar": { cantidad: 150, costo: 0.7 },     // 150g a $0.7 por 1kg
        "Huevos": { cantidad: 3, costo: 0.5 },       // 3 unidades a $0.5 por docena
        "Harina": { cantidad: 120, costo: 0.4 },     // 120g a $0.4 por 1kg
        "Mantequilla": { cantidad: 100, costo: 1 }   // 100g a $1 por 1kg
    },
    tarta_manzana: {
        "Harina": { cantidad: 250, costo: 1 },       // 250g a $1 por 1kg
        "Azúcar": { cantidad: 100, costo: 0.5 },     // 100g a $0.5 por 1kg
        "Huevos": { cantidad: 2, costo: 0.3 },       // 2 unidades a $0.3 por docena
        "Mantequilla": { cantidad: 80, costo: 0.9 }, // 80g a $0.9 por 1kg
        "Manzanas": { cantidad: 3, costo: 1.5 }      // 3 unidades a $1.5 por kg
    }
};

// Función para calcular ingredientes y costos
function calcularIngredientes() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    
    // Validar si la cantidad es un número válido
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    const postre = document.getElementById("postre").value;
    const ingredientesBase = recetas[postre];
    
    let resultado = "";
    let costoTotal = 0;
    
    // Iterar sobre los ingredientes y calcular la cantidad y el costo
    for (let ingrediente in ingredientesBase) {
        let cantidadTotal = ingredientesBase[ingrediente].cantidad * cantidad;
        let costoDolar = ingredientesBase[ingrediente].costo * cantidad;
        
        // Convertir el costo de dólares a bolivianos (BOB)
        let costoBolivianos = costoDolar * tasaConversion;
        
        // Mostrar los resultados de los ingredientes
        resultado += `<li><span>${ingrediente}:</span> <span>${cantidadTotal} ${ingrediente === "Huevos" || ingrediente === "Manzanas" ? "unidad(es)" : "g"} - Bs. ${costoBolivianos.toFixed(2)}</span></li>`;
        
        // Sumar el costo total en bolivianos
        costoTotal += costoBolivianos;
    }
    
    // Mostrar los resultados en la interfaz
    document.getElementById("resultado").innerHTML = resultado;
    
    // Mostrar el costo total en bolivianos
    document.getElementById("costoTotal").textContent = `Bs. ${costoTotal.toFixed(2)}`;
    
    // Agregar un mensaje si el costo total es 0 o muy bajo
    if (costoTotal <= 0) {
        document.getElementById("costoTotal").textContent = "Costo no calculable";
    }
}

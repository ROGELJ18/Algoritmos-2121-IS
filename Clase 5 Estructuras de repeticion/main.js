//EJERCICIOS CON IF ELSE
var dinero = 20;
if (dinero < 10){
    console.log("No te alcanza")
}else{
    console.log("Te alcanza")
}

var dinero = 500;
if (dinero > 450){
    console.log("Compra una playera")
}else{
    console.log("Compra un short")
}

var beca = 1000;
if (beca < 100){
    console.log("Compra cereal")
}else{
    console.log("Puedes comprar un balon")
}

var beca = 900;
if (beca > 1000){
    console.log("Tienes el dinero para comprarlo")    
}else{
    console.log("No tienes el dinero suficiente")
}

var sueldo = 5000
if (sueldo < 5000){
    console.log("Me pagaron bien")
}else{
    console.log("Me pagaron muy poco")
}

// EJERCICIOS CON SWITCH
var nombre = "Dario";
switch (nombre){
    case "Diana":
          console.log("Hola hermana de Josue");
    break;
    case "Daniel":
          console.log("Hola hermano de Josue");
    break;
    case "Dario":
          console.log("HOLA JOSUE DARIO");
    break;
    case "Josue":
          console.log("Hola Josue");
    break;
}

var color = "Azul";
switch (color){
    case "Azul":      
          console.log("TE GUSTA EL COLOR AZUL");
    break;
    case "Verde":
          console.log("Te gusta el color verde");
    break;
    case "Rojo":
        console.log("Te gusta el color rojo");
    break;    

}

var edad = "20";
switch (edad){
    case "10":
        console.log("Eres un niño");
    break;
    case "20":
        console.log("ERES UN JOVEN");
    break;
    case "30":
        console.log("Eres un adulto");
    break;           
}

var altura ="1.60";
switch (altura){
    case "1.50":
        console.log("Eres pequeño");
    break;
    case "1.60":
        console.log("ERES DE ESTATURA MEDIANA");
    break;    
    case "1.70":
        console.log("Eres de estatura media alta");
    break;
    case "1.80":
        console.log("Eres de estura alta"); 
    break;          
}

var auto = "Mercedes Benz";
switch (auto){
    case "Camaro":
        console.log("Tu auto fav es de Mercedes Benz");
    break;
    case "Ferrari":
        console.log("Tu auto fav es de Ferrari");
    break;
    case "Audi":
        console.log("Tu auto fav es de Audi");
    break;
    case "Tesla":
        console.log("Tu auto fav es de Tesla");
    break;
    case "Corvette":
        console.log("Tu auto fav es de Corvette");
    break;
    case "Lamborghini":
        console.log("Tu auto fav es de Lamborghini");
    break;
    case "Mercedes Benz":
        console.log("TU AUTO FAV ES DE MERCEDES BENZ");
    break;               
}

// EJERCICIOS COMBINAR IF SWITCH
var n = 6000;
if (n > 3000){
    console.log("Puedes comprar en Lacoste");
}else{
    switch (n){
        case 10000:
            console.log("Puedes comprar en Louis Vuitton");
        break;
        case 8000:
            console.log("Puedes comprar en Versace");
        break;
        case 6000:
            console.log("Puedes comprar en Calvin Klein");
        break;            
    }
}

var n = 8;
if (n > 9){
    console.log("Excelente calificacion");
} else{
    switch (n){
        case 9:
            console.log("Buena calificacion");
        break;
        case 8:
            console.log("Buena calificacion");
        break;
        case 7:
            console.log("Calificacion regular");
        break;
        case 6:
            console.log("Calificacion reprobatoria");
        break;        

    }
}

var frutas = "mango";
if (frutas == "cereza"){
    console.log("El kilo de cereza esta en 15 pesos");
}else{
    switch (frutas){
        case "manzana":
            console.log("El kilo de manzana cuesta 20 pesos");
        break;
        case "pera":
            console.log("El kilo de pera cuetsa 18 pesos");
        break;
        case "sandia":
            console.log("La sandia cuesta 60 pesos");
        break;
        case "mango":
            console.log("El kilo de mango cuesta 16 pesos");
        break;            
    }
}

var verduras = "chiles";
if (verduras == "chiles"){
    console.log("El kilo de chiles esta en 20 pesos");
}else{
    switch (verduras){
        case "lechuga":
             console.log("Cada lechuga cuesta 15 pesos");
        break;
        case "zanahoria":
             console.log("El kilo de zanahoria cuesta 19 pesos");
        break;
        case "papa":
             console.log("El kilo de papa cuesta 17 pesos");
        break;
        case "pepino":
             console.log("El kilo de pepinos cuesta 13 pesos");
        break;                           

    }
}

var nombre = "Felipe";
if (nombre == "Lucia"){
    console.log("Lucia es madre de Josue");
}else {
    switch (nombre){
        case "Felipe":
             console.log("Felipe es padre de Josue");
        break;     
        case "Diana":
             console.log("Diana es hermana de Josue");
        break;
        case "Daniel":
             console.log("Daniel es hermano de Josue");
        break;
                
    }
}
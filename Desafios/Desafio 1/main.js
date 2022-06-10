//Variables
var temperatura;
var opc;
var celcius;
var f;
var k;
const KELVIN = 273.15;

do {
    temperatura = parseInt(prompt("Ingrese una temperatura mayor o igual a 0: "));
    if(temperatura < 0){
        alert("Error, la temperatura debe ser mayor o igual a 0.");
    }
} while(temperatura < 0);

//Menu
do{
    alert("1. Comvertir grados Celsius a Kelvin\n");
    alert("2. Convertir grados Celsius a Farenheit\n");
    alert("3. Introducir otro valor\n");
    alert("4. Salir\n");
    opc = prompt(" Digite una opcion: "); 

    switch(opc){
        case "1":
            k = temperatura + KELVIN;
            alert(`La temperatura en Kelvin es = ${k}`);
            break;
        case "2":
            f = (temperatura * 9 / 5) + 32;
            alert(`La temperatura en Farenheit es = ${f}`);
            break;
        case "3":
            do {
                temperatura = parseInt(prompt("Ingrese una temperatura mayor o igual a 0: "));
                if(temperatura < 0){
                    alert("Error, la temperatura debe ser mayor o igual a 0.");
                }
            } while(temperatura < 0);
            break;
    }
}while(opc < "4");

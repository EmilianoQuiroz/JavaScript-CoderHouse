//En el siguinete algoritmo se le piden una serie de numeros al usuario, se los guarda en un array y se define cual es el menor y cual es el mayor.

window.onload = function(){
    let numeroMayor = 0;
    let numeroMenor =99999999;
    let numeros = [];
    let usuario = "";

    do{
        usuario = prompt('Digite un numero o escriba "fin" para finalizar');
        if(usuario != 'fin'){
            usuario = parseInt(usuario);
            numeros.push(usuario);
        }
    } while (usuario != 'fin')

 
    //Recorrido del array
    for(var i = 0; i < numeros.length; i++){
        if(numeros[i]> numeroMayor){
            numeroMayor = numeros[i];
        }
        if(numeros[i]< numeroMenor){
            numeroMenor = numeros[i];
        }
    }
    if(numeros.length >2){
        console.log("Fin de la comparacion");
        console.log(`El numeron mayor es ${numeroMayor}`);
        console.log(`El numeron mayor es ${numeroMenor}`);
    }else{
        console.log('No hay numeros suficientes para comparar.')
    }
    }

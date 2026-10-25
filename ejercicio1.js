//LOGICA PROPIA
function ascendenciayDescendencia() {
    // 1. Number envuelve al prompt
    const numero1 = Number(prompt("Inserte el primer número"));
    const numero2 = Number(prompt("Inserte el segundo número"));
    const numero3 = Number(prompt("Inserte el tercer número"));

    // 2. Usamos {} (objeto) para poder usar .numero1, .numero2, etc.
    const numerosIngresados = { numero1, numero2, numero3 };
    //crear un array de los tres numeros
    const listadeNumeros = [numerosIngresados.numero1, numerosIngresados.numero2, numerosIngresados.numero3];


    let numeroMayor;
    let numeroMenor;
    let numeroMedio;
    function darnumeroMayor() {
        if (numerosIngresados.numero1 > numerosIngresados.numero2 && numerosIngresados.numero1 > numerosIngresados.numero3) {
            numeroMayor = numerosIngresados.numero1;
            document.querySelector('.resultados').innerHTML += `<p>${numeroMayor} es el mayor</p>`;      
        } else if (numerosIngresados.numero2 > numerosIngresados.numero1 && numerosIngresados.numero2 > numerosIngresados.numero3) {
            numeroMayor = numerosIngresados.numero2;
            document.querySelector('.resultados').innerHTML += `<p>${numeroMayor} es el mayor</p>`;
        } else if (numerosIngresados.numero3 > numerosIngresados.numero1 && numerosIngresados.numero3 > numerosIngresados.numero2) {
            numeroMayor = numerosIngresados.numero3;
            document.querySelector('.resultados').innerHTML += `<p>${numeroMayor} es el mayor</p>`; 
        } else {
            document.querySelector('.resultados').innerHTML += `<p>Los números ingresados son iguales</p>`; 
        }
    }

    function darnumeroMenor() {
        if (numerosIngresados.numero1 < numerosIngresados.numero2 && numerosIngresados.numero1 < numerosIngresados.numero3) {
            numeroMenor = numerosIngresados.numero1;
            document.querySelector('.resultados').innerHTML += `<p>${numeroMenor} es el menor</p>`;      
        } else if (numerosIngresados.numero2 < numerosIngresados.numero1 && numerosIngresados.numero2 < numerosIngresados.numero3) {
            numeroMenor = numerosIngresados.numero2;
            document.querySelector('.resultados').innerHTML += `<p>${numeroMenor} es el menor</p>`;
        } else if (numerosIngresados.numero3 < numerosIngresados.numero1 && numerosIngresados.numero3 < numerosIngresados.numero2) {
            numeroMenor = numerosIngresados.numero3;
            document.querySelector('.resultados').innerHTML += `<p>${numeroMenor} es el menor</p>`; 
        } else {
            document.querySelector('.resultados').innerHTML += `<p>Los números ingresados son iguales</p>`; 
        }
    }

    function darnumeroMedio() {
        if ((numerosIngresados.numero1 > numerosIngresados.numero2 && numerosIngresados.numero1 < numerosIngresados.numero3) || 
            (numerosIngresados.numero1 < numerosIngresados.numero2 && numerosIngresados.numero1 > numerosIngresados.numero3)) {
            numeroMedio = numerosIngresados.numero1; 
            document.querySelector('.resultados').innerHTML += `<p>${numeroMedio} es el número medio</p>`; 
        } else if ((numerosIngresados.numero2 > numerosIngresados.numero1 && numerosIngresados.numero2 < numerosIngresados.numero3) || 
                   (numerosIngresados.numero2 < numerosIngresados.numero1 && numerosIngresados.numero2 > numerosIngresados.numero3)) {
            numeroMedio = numerosIngresados.numero2; 
            document.querySelector('.resultados').innerHTML += `<p>${numeroMedio} es el número medio</p>`; 
        } else if ((numerosIngresados.numero3 > numerosIngresados.numero2 && numerosIngresados.numero3 < numerosIngresados.numero1) || 
                   (numerosIngresados.numero3 < numerosIngresados.numero2 && numerosIngresados.numero3 > numerosIngresados.numero1)) {
            numeroMedio = numerosIngresados.numero3; 
                //  += en innerHTML para que se agreguen los párrafos uno tras otro, no se borren
            document.querySelector('.resultados').innerHTML += `<p>${numeroMedio} es el número medio</p>`; 
        }
    }

    function demenoraMayor(){
        
        listadeNumeros.sort((a, b)=> a - b );
       
        document.querySelector('.resultados').innerHTML += `<p>orden de menor a mayor: ${listadeNumeros.join(',')}</p>`
        
    }

    function demayoraMenor(){

        //invierte el orden
        listadeNumeros.sort((a,b)=>b-a);
        document.querySelector('.resultados').innerHTML += `<p>orden de mayor a menor: ${listadeNumeros.join(',')}</p>`
    }

    darnumeroMayor();
    darnumeroMenor();
    darnumeroMedio();
    demenoraMayor();
    demayoraMenor();
}

ascendenciayDescendencia();
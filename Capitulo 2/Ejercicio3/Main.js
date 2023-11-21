/*se creará una calculadora simple que permite realizar operaciones matemáticas básicas. 
Se implementarán cuatro funciones (sumar, restar, dividir y multiplicar) que ejecutarán operaciones según la elección del usuario. 
El programa solicitará al usuario que seleccione una operación (suma, resta, división o multiplicación) mediante un número de identificación. 
Luego, se pedirá el ingreso de dos números para realizar la operación seleccionada y se mostrará el resultado.*/ 

const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("Que operacion deseas realizar?")
operacion = prompt("1: Suma, 2: Resta, 3: Division, 4: Multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = sumar(numero1, numero2)
    alert(`Tu resultado es ${resultado} `);


}

else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = restar(numero1, numero2)
    alert(`Tu resultado es ${resultado} `);

}

else if (operacion == 3) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = dividir(numero1, numero2)
    alert(`Tu resultado es ${resultado} `);

}

else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicar(numero1, numero2)
    alert(`Tu resultado es ${resultado} `);

}

else{
    alert("No se ha enconrado la operacon, intentelo nuevamente con valores validos")
}
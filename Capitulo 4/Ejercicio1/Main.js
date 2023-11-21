/*construye una calculadora en JavaScript mediante la implementación de una clase Calculadora. 
La clase contiene métodos para realizar operaciones aritméticas básicas como suma, resta, división, multiplicación, potenciación, raíz cuadrada 
y raíz cúbica. El programa permite al usuario elegir la operación deseada y proporcionar los números correspondientes para realizar el cálculo.*/

class Calculadora{
    constructor(){
            
    }
    sumar(num1, num2){

        return parseInt(num1) + parseInt(num2);
    }
    
    restar(num1, num2){
        return parseInt(num1) - parseInt(num2);
    }
    
    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }
    
    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num, exp){
        let numero = num;
        for (var i = 0; i < exp; i++){
            numero = numero * numero
        }
        return numero;
    }
    raizCuadrada(num){
        //Para sacar la raiz cuadrada
        return Math.sqrt(num);
    }
    raizCubica(num){
        //Para saca raiz cubica
        return Math.cbrt(num);

    }     
}

const calculadora = new Calculadora();


alert("Que operacion deseas realizar?")
operacion = prompt("1:Suma  2:Resta  3:Division  4:Multiplicacion  5:Potenciacion  6:Raiz cuadrada  7:Raiz cubica  ");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = calculadora.sumar(numero1, numero2)
    alert(`Tu resultado es ${resultado} `);


}

else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = calculadora.restar(numero1, numero2)
    alert(`Tu resultado es ${resultado} `);

}

else if (operacion == 3) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = calculadora.dividir(numero1, numero2)
    alert(`Tu resultado es ${resultado} `);

}

else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1, numero2)
    alert(`Tu resultado es ${resultado} `);

}

else if (operacion == 5) {
    let numero1 = prompt("Numero a potenciar");
    let numero2 = prompt("Exponente");
    resultado = calculadora.potenciar(numero1, numero2)
    alert(`Tu resultado es ${resultado} `);

}

else if (operacion == 6) {
    let numero1 = prompt("Escriba el numero del cual desea sacarle la raiz cuadrada");
    resultado = calculadora.raizCuadrada(numero1)
    alert(`Tu resultado es ${resultado} `);

}

else if (operacion == 7) {
    let numero1 = prompt("Escriba el numero del cual desea sacarle la raiz cubica");
    resultado = calculadora.raizCubica(numero1)
    alert(`Tu resultado es ${resultado} `);

}

else{
    alert("No se ha enconrado la operacon, intentelo nuevamente con valores validos")
}
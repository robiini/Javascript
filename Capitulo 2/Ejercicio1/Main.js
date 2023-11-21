/*se desarrollará un programa para validar el acceso de clientes a un evento basado en su edad y el horario en que desean ingresar. 
Se utilizará una función llamada validarCliente que evaluará la edad del cliente y la hora en la que solicita entrar al evento. 
Si el cliente es mayor de 18 años, se verificará si puede ingresar gratis entre ciertas horas determinadas. En caso contrario, 
se le informará que es menor de edad y no podrá acceder al evento.*/ 

let gratis = false;

const validarCliente  = (time)=>{

    let edad = prompt("Cual es tu edad ");
    if(edad >= 18){
        if (time >= 2 && time <7 && gratis == false){
            alert("Puedes pasar gratis porque esres la primer apersona despues de las 2 AM ");
            gratis = true;
        }else{
            alert(`Son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`);
        }
    
    }else{
        alert("Eres menor de edad, niño vuelve cuando seas mayor de edad ");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(4);
validarCliente(0.3);
validarCliente(2);
validarCliente(3);


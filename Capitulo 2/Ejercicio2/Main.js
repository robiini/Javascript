/*se desarrollará un programa para validar el acceso de clientes a un evento basado en su edad y el horario en que desean ingresar. 
Se utilizará una función llamada validarCliente que evaluará la edad del cliente y la hora en la que solicita entrar al evento. 
Si el cliente es mayor de 18 años, se verificará si puede ingresar gratis entre ciertas horas determinadas. 
En caso contrario, se le informará que es menor de edad y no podrá acceder al evento.
*/


let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++ ){
    alumnosTotales[i] = [prompt("nombre del alumno" + (i+1)),0];
}

const tomarAsistencia = (nombre, p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);

    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ___________ Presentes: ${alumnosTotales[alumno][1]} <br>
    ___________ Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
    
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "<b style='color:red'> REPROBADO POR INASISTENCIAS </b><br><br>";
    }else{
        resultado+= "<br><br>"
    }
    document.write(resultado)
}
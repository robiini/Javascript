/*simula un sistema de evaluación de materias académicas. Utiliza un objeto materias que contiene información sobre distintas materias y sus respectivas 
asistencias, promedios y cantidad de trabajos. La función aprobado evalúa cada materia y muestra mensajes de estado sobre asistencias, promedio y trabajos realizados.*/

const materias = {
    fisica: [90, 6, 4, "fisica"],
    matematicas: [84, 2, 1, "matematicas"],
    logica: [80, 6, 2, "logica"],
    quimica: [95, 7, 3, "quimica"],
    calculo: [20, 3, 4, "calculo"],
    programacion: [90, 6, 4, "programacion"],
    bilogia: [50, 5, 3, "biologia"],
    bbdd: [99, 4, 1, "bbdd"],
    algebra: [97, 9, 2, "algebra"]
}

const aprobado = ()=>{
   for (materia in materias){
    let asistencia = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajos = materias[materia][2]

    console.log(materias[materia][3]);


    if (asistencia >= 90){
        console.log("%cAsistencias en orden", "color:green");
    }else{
        console.log("%cFalta de asistencias", "color:red");

    }
    if (promedio >= 7){
        console.log("%cPromedio en orden", "color:green");

    }else{
        console.log("%cPromedio desaprobado", "color:red");

    }
    if (trabajos >= 3){
        console.log("%cTrabajos practicos en orden", "color:green");
        
    }else{
        console.log("%cFaltan trabajos practicos", "color:red");
    }


   } 
}

aprobado()
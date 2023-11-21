/* maneja la información académica de diferentes materias y alumnos mediante dos funciones: obtenerInformacion y mostrarInformacion. 
La primera función retorna información sobre los profesores y alumnos de una materia específica o sobre todas las materias disponibles. 
La segunda función muestra esta información en pantalla. Adicionalmente, se incluye la función cantidadDeClases para contar en cuántas 
clases está inscrito un alumno específico y mostrar esa información.*/

const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Torres","Nathalia", "Juan", "Carlos", "Camila"],
        programacion: ["Giraldo","Nathalia", "Estefania", "Juan"],
        logica: ["Gonzalez","Nathalia", "Juan", "Estefania", "Camila", "Carlos"],
        quimica: ["Rendon","Nathalia", "Juan", "Estefania", "Camila", "Carlos"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia, materias];
    }else{
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
    
    if (informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b>: <b style='color:red'>${profesor}</b><br>
        Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
        `);
    }
}

const cantidadDeClases = (alumno)=>{
    let informacion =  obtenerInformacion()
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);

        }
    }
    return `<b style='color:blue'>
    ${alumno}</b> esta en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
    <br><br>
    `;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("Carlos"))
document.write(cantidadDeClases("Nathalia"))
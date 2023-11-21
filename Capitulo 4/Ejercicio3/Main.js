/*simula la inscripción de alumnos en distintas materias. Se implementa la función inscribir que verifica la disponibilidad de cupos en una materia 
específica y, en caso de haber espacio, agrega al alumno a la lista correspondiente. Se maneja la lógica de no permitir más de 20 alumnos por materia.*/

let materias = {
        fisica: ["Torres","Nathalia", "Juan", "Carlos", "Camila"],
        programacion: ["Giraldo","Nathalia", "Estefania", "Juan"],
        logica: ["Gonzalez","Nathalia", "Juan", "Estefania", "Camila", "Carlos"],
        quimica: ["Rendon","Nathalia", "Juan", "Estefania", "Camila", "Carlos"]
    }

const inscribir = (alumno, materia)=>{
    personas = materias[materia];
    
    personas = personas;
    if (personas.length >= 20){
        document.write(`Lo siento ${alumno}, las clases de  ${materia} ya esatan llenas.<br></br>`);
    }else{
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['progamacion'],
                logica: materias['logica'],
                quimica: materias['quimica'],
            }
        }else if (materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica'],
            }
        }else if (materia == "logica"){
            materias = {
                fisica:materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica'],
            }
        }else if (materia == "quimica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas,
            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente. <br></br>`)
    }

}

document.write(materias['fisica'] + "<br>")

inscribir("Juan", "fisica");
inscribir("Pedro", "fisica");
inscribir("Carlos", "fisica");
inscribir("Judas", "fisica");
inscribir("Juan", "fisica");
inscribir("Pedro", "fisica");
inscribir("Carlos", "fisica");
inscribir("Judas", "fisica");
inscribir("Pedro", "fisica");
inscribir("Carlos", "fisica");
inscribir("Judas", "fisica");
inscribir("Pedro", "fisica");





document.write("<br>" + materias['fisica'] )


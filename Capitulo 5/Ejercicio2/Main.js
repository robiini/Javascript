/*muestra la planificación de actividades para un período de dos semanas. Se utilizan variables para representar diferentes actividades 
diarias como trabajo, descanso, estudio, trabajos prácticos y tareas del hogar. El código utiliza ciclos for y funciones de consola (console.log(), 
console.group(), console.groupCollapsed() para mostrar las actividades organizadas por día y semana.*/

let trabajo = "240 minutos de trabajo ";
let descanso = "10 minutos de descanso";
let estudio = "100 minutos de estudio";
let trabajoPractico = "100 minutos hacer trabajos practicos";
let trabajoCasa = "30 minutos de oficio de la casa";


console.log("TAREAS");

for (var i = 0; i < 14; i++){
    if(i == 0){
        console.group("Semana 1")
    }
    console.groupCollapsed("Dia" + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(trabajoPractico);
    console.log(trabajoCasa);
    console.groupEnd();
    if (i == 7){
        
        console.groupEnd();
        console.groupCollapsed("Semana 2")
        
    }
}

console.groupEnd();
console.groupEnd();
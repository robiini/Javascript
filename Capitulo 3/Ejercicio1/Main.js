/*se implementarán clases en JavaScript para modelar celulares básicos y celulares de alta gama. 
La clase Celular contendrá propiedades como color, peso, pantalla, cámara y memoria, mientras que la clase CelularAltaGama extenderá las 
funcionalidades agregando una cámara extra y métodos especiales como grabar en cámara lenta y reconocimiento facial.*/

class Celular{
    constructor(color, peso, pantalla, camara, memoria){
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.memoria = memoria;
        this.encendido = false;
    }
    //Metodos
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("El celular esta prendido");
            this.encendido = true;
        }else{
            alert("El celular esta apagado")
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("Reiniciando el celular");
        }else{
            alert("El celular esta apagado")
        }
    }
    tomarFotos(){
        alert(`Foto tomada en una resolucion  ${this.camara}`)
    }
    grabarVideo(){
        alert(`Grabando video en ${this.camara}`)
    }
    MostrarInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br> 
        Tamaño: <b>${this.pantalla}</b></br>
        Resolucion de camara: <b>${this.camara}</b></br>
        Memoria Ram: <b>${this.memoria}</b></br>
        `;
    }
  
}

class CelularAltaGama extends Celular{
    constructor(color, peso, pantalla, camara, memoria, camaraExtra ){
        super(color,peso,pantalla, camara, memoria);
        this.camaraExtra = camaraExtra;
    }
    grabarVideoLento(){
        alert("Grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Analizando rostro")  
    }
    MostrarInfoAltaGama(){
        return this.MostrarInfo() + `Resolucion de la camara trasera extra ${this.camaraExtra}`;
    }

}


const celular1 = new CelularAltaGama("Azul", "130g", "5.2", "5K", "3GB", "Super Amoled")
const celular2 = new CelularAltaGama("Nego", "120g", "8.2", "7K", "45GB", "Super Amoled")


document.write(`
${celular1.MostrarInfoAltaGama()} <br> <br>
${celular2.MostrarInfoAltaGama()} <br> <br>

`);

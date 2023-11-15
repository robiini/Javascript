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



/*celular1 = new Celular("rojo", "150g", "5", "HD", "1GB")
celular2 = new Celular("azul", "155g", "6", "full HD", "2GB")
celular3 = new Celular("rojo", "170g", "7", "4K", "3GB")*/

/*celular1.presionarBotonEncendido();
celular1.tomarFotos();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();*/

const celular1 = new CelularAltaGama("Azul", "130g", "5.2", "5K", "3GB", "Super Amoled")
const celular2 = new CelularAltaGama("Nego", "120g", "8.2", "7K", "45GB", "Super Amoled")


document.write(`
${celular1.MostrarInfoAltaGama()} <br> <br>
${celular2.MostrarInfoAltaGama()} <br> <br>

`);

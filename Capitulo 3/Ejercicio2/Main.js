/*
La clase App representa una aplicación móvil con propiedades como descargas, puntuación y peso, además de métodos para gestionar su estado y obtener información.
Se crean varias instancias de la clase App (app1, app2, ..., app7) con diferentes características para mostrar su información.
Se muestra la información de cada aplicación, resaltando sus descargas, puntuación y peso.*/

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente")
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente")
        }
    }

    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b> ${this.descargas}</b></br>
        Puntuacion: <b> ${this.puntuacion}</b></br>
        Peso: <b> ${this.peso}</b></br>        
        `
    }
}

app1 = new App("16.000", "5 estrellas", "900mb");
app2 = new App("16.000", "4.5 estrellas", "400mb");
app3 = new App("16.000", "3.5 estrellas", "100mb");
app4 = new App("16.000", "2.5 estrellas", "1gb");
app5 = new App("16.000", "4 estrellas", "250mb");
app6 = new App("17", "3 estrellas", "522mb");
app7 = new App("42.000", "4.8 estrellas", "723mb");

document.write(`
    ${app1.appInfo()} <br>   
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
`)

/*app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();*/
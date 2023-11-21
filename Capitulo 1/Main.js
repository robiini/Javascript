/* Se solicita desarrollar un programa en JavaScript que simule la compra de paletas de helado por parte de tres personas: Andrés, Pedro y Carla. 
Cada persona ingresará la cantidad de dinero que posee y, según esta cantidad, el programa determinará qué tipo de paleta podrían adquirir de una lista determinada, 
mostrando además cuánto dinero les sobraría después de la compra. El ejercicio pretende practicar el uso de condicionales (if-else if-else) 
en JavaScript para tomar decisiones basadas en distintas cantidades de dinero ingresadas.*/


dineroAndres = prompt("Cuanto dinero tienes Andres?");
dineroPedro = prompt("Cuanto dinero tienes Pedro?");
dineroCarla = prompt("Cuanto dinero tienes Carla?");

dineroAndres = parseInt(dineroAndres);

if (dineroAndres >= 1 && dineroAndres < 1){
    alert("Andres compra la paleta de agua")
    alert("y te sobran" + (dineroAndres -0.6))
}

else if (dineroAndres >= 1 && dineroAndres < 1.6){
    alert("Andres compra la paleta de maracuya")
    alert("y te sobran" + (dineroAndres -1.6))

    
}

else if(dineroAndres >= 1.6 && dineroAndres < 1.7){
    alert("Andres compra la paleta de mango biche")
    alert("y te sobran" + (dineroAndres -1.7))

}

else if(dineroAndres >= 1.7 && dineroAndres < 1.8){
    alert("Andres compra la paleta de salpicon")
    alert("y te sobran" + (dineroAndres -1.8))

}

else if(dineroAndres >= 1.68 && dineroAndres < 2.9){
    alert("Andres compra la paleta de coco")
    alert("y te sobran" + (dineroAndres -2.9))

}

else if(dineroAndres >= 2.9){
    alert("Andres compra la paleta de oreo o la paleta de milo")
    alert("y te sobran" + (dineroAndres -0.6))

}else{
    alert("No te alcanza para nada, vuelve con mas dinero")
}

//************************************ PEDRO ******************************************** */
dineroPedro = parseInt(dineroPedro);

if (dineroPedro >= 1 && dineroPedro < 1){
    alert("Pedro compra la paleta de agua")
    alert("y te sobran" + (dineroPedro -0.6))
}

else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro compra la paleta de maracuya")
    alert("y te sobran" + (dineroPedro -1.6))

    
}

else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro compra la paleta de mango biche")
    alert("y te sobran" + (dineroPedro -1.7))

}

else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Andres compra la paleta de salpicon")
    alert("y te sobran" + (dineroPedro -1.8))

}

else if(dineroPedro >= 1.68 && dineroPedro < 2.9){
    alert("Pedro compra la paleta de coco")
    alert("y te sobran" + (dineroPedro -2.9))

}

else if(dineroPedro >= 2.9){
    alert("Pedro compra la paleta de oreo o la paleta de milo")
    alert("y te sobran" + (dineroPedro -0.6))

}else{
    alert("No te alcanza para nada, vuelve con mas dinero")
}

//************************************ CARL A ******************************************** */

dineroCarla = parseInt(dineroCarla);

if (dineroCarla >= 1 && dineroCarla < 1){
    alert("Carla compra la paleta de agua")
    alert("y te sobran" + (dineroCarla -0.6))
}

else if (dineroCarla >= 1 && dineroCarla < 1.6){
    alert("Carla compra la paleta de maracuya")
    alert("y te sobran" + (dineroCarla -1.6))

    
}

else if(dineroCarla >= 1.6 && dineroCarla < 1.7){
    alert("Carla compra la paleta de mango biche")
    alert("y te sobran" + (dineroCarla -1.7))

}

else if(dineroCarla >= 1.7 && dineroCarla < 1.8){
    alert("Carla compra la paleta de salpicon")
    alert("y te sobran" + (dineroCarla -1.8))

}

else if(dineroCarla >= 1.68 && dineroCarla < 2.9){
    alert("Carla compra la paleta de coco")
    alert("y te sobran" + (dineroCarla -2.9))

}

else if(dineroCarla >= 2.9){
    alert("Carla compra la paleta de oreo o la paleta de milo")
    alert("y te sobran" + (dineroCarla -0.6))

}else{
    alert("No te alcanza para nada, vuelve con mas dinero")
}
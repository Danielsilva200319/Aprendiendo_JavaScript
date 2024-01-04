/* let numero = 10;
let numero1 = 5;
resultado = -numero;
document.write(resultado);
alert(resultado);

// CONCATENACIÓN
nombre = "Lucas Dalto";
frase = `Soy ${nombre} y estoy caminando`;
document.write(frase); */

/* Roberto = prompt("Cuanto dinero tienes Roberto?: ");
Pedro = prompt("Cuanto dinero tienes Pedro?: ");
Cofla = prompt("Cuanto dinero tienes Cofla?: ");
Cofla = parseInt(Cofla);

// Cofla
if (Cofla >= 0.6 && Cofla < 1) {
    alert("Cofla; Comprate el helado de agua");
    alert("Te sobran" + (Cofla - 0.6));
}
else if (Cofla >= 1 && Cofla < 1.6) {
    alert("Cofla; Comprate el helado de crema");
    alert("Te sobran" + (Cofla - 1));
}
else if (Cofla >= 1.6 && Cofla < 1.7) {
    alert("Cofla; Comprate el helado de heladix");
    alert("Te sobran" + (Cofla - 1.6));
}
else if (Cofla >= 1.7 && Cofla < 1.8) {
    alert("Cofla; Comprate el helado de heladovich");
    alert("Te sobran" + (Cofla - 1.7));
}
else if (Cofla >= 1.8 && Cofla < 2.9) {
    alert("Cofla; Comprate el helado de helardo");
    alert("Te sobran" + (Cofla - 1.8));
}
else if (Cofla >= 2.9) {
    alert("Cofla; Comprate el helado con confitex o el pote de 1/4kg");
    alert("Te sobran" + (Cofla - 2.9));
}
else{
    alert("Cofla; No te alcanza");
}

// Roberto
if (Roberto >= 0.6 && Roberto < 1) {
    alert("Roberto; Comprate el helado de agua");
}
else if (Roberto >= 1 && Roberto < 1.6) {
    alert("Roberto; Comprate el helado de crema");
}
else if (Roberto >= 1.6 && Roberto < 1.7) {
    alert("Roberto; Comprate el helado de heladix");
}
else if (Roberto >= 1.7 && Roberto < 1.8) {
    alert("Roberto; Comprate el helado de heladovich");
}
else if (Roberto >= 1.8 && Roberto < 2.9) {
    alert("Roberto; Comprate el helado de helardo");
}
else if (Roberto >= 2.9) {
    alert("Roberto; Comprate el helado con confitex o el pote de 1/4kg");
}
else{
    alert("Roberto; No te alcanza");
}

// Pedro
if (Pedro >= 0.6 && Pedro < 1) {
    alert("Pedro; Comprate el helado de agua");
}
else if (Pedro >= 1 && Pedro < 1.6) {
    alert("Pedro; Comprate el helado de crema");
}
else if (Pedro >= 1.6 && Pedro < 1.7) {
    alert("Pedro; Comprate el helado de heladix");
}
else if (Pedro >= 1.7 && Pedro < 1.8) {
    alert("Pedro; Comprate el helado de heladovich");
}
else if (Pedro >= 1.8 && Pedro < 2.9) {
    alert("Pedro; Comprate el helado de helardo");
}
else if (Pedro >= 2.9) {
    alert("Pedro; Comprate el helado con confitex o el pote de 1/4kg");
}
else{
    alert("Pedro; No te alcanza");
} */

let pc1 = {
    nombre: "PC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB"
}

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi pc es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la memoria ram tiene: <b>${ram}</b> <br>
         el espacio en disco es de <b>${espacio}</b>`;
document.write(frase);
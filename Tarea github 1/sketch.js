let datosLimpios = posicion.filter(function(valor) {
  return valor !== null && valor !== "";
});


let datosMemoria = [];

for (let i = 0; i < datosLimpios.length; i++) {

  if (!datosMemoria.includes(datosLimpios[i])) {
    datosMemoria.push(datosLimpios[i]);
  }

}

console.log("Datos originales:", posicion);
console.log("Datos para graficar:", datosMemoria);


function setup() {

  createCanvas(600, 200);

  background(240);

  
  noLoop();
}


function draw() {

  background(240);

  // Título
  fill(0);
  noStroke();

  textSize(18);
  textAlign(LEFT, TOP);

  text(
    "Visualización de Celdas de Memoria",
    20,
    20
  );


  // Configuración
  let startX = 40;
  let startY = 70;

  let boxWidth = 80;
  let boxHeight = 60;

  let gap = 15;


  for (let i = 0; i < datosMemoria.length; i++) {

    let posX = startX + i * (boxWidth + gap);


    // Caja
    stroke(0);
    strokeWeight(2);

    fill(255);

    rect(
      posX,
      startY,
      boxWidth,
      boxHeight,
      5
    );

    noStroke();

    fill(0, 102, 204);

    textSize(22);
    textAlign(CENTER, CENTER);

    text(
      datosMemoria[i],
      posX + boxWidth / 2,
      startY + boxHeight / 2
    );

    
    fill(100);

    textSize(13);

    text(
      "Índice [" + i + "]",
      posX + boxWidth / 2,
      startY + boxHeight + 20
    );

  }

}
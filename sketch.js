//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 300;
let diametro = 22;
let raio = diametro / 2;

//variáveis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let cumprimentoRaquete = 10;
let alturaRaquete = 80;

let colidiu = false;

//variávesis da raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let calculaChanceDeErrar = 0;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(199, 21, 133);
  MostrarBolinha();
  MovimentaBolinha();
  VerificaColisaoBorda();
  MostrarRaquete(xRaquete, yRaquete);
  MovimentarMinhaRaquete();
  MovimentaRaqueteOponente();
  VerificaColisaoRaquete(xRaquete, yRaquete);
  MostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  VerificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  IncluiPlacar();
  MarcarPonto();
  //bolinhaNaoFicaPresa();

  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function MostrarBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function MovimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio > 0){
      xBolinha = 20
      
      
    }
}


function VerificaColisaoBorda() {}

function MostrarRaquete(x, y) {
  rect(x, y, cumprimentoRaquete, alturaRaquete);
}

function MovimentarMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function VerificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + cumprimentoRaquete &&
    yBolinha - raio < yRaquete + alturaRaquete &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function MovimentaRaqueteOponente() {
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
  
  function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar() }

  }

function VerificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(
    x,
    y,
    cumprimentoRaquete,
    alturaRaquete,
    xBolinha,
    yBolinha,
    raio
  );

  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function IncluiPlacar() {
  textAlign(CENTER);
  textSize(16);
  fill("black");
  rect(150, 10, 40, 20);
  rect(450, 10, 40, 20);
  fill("788");
  text(meusPontos, 170, 26);
  text(pontosDoOponente, 470, 26);
}

function MarcarPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}

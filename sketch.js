// ╔══════•ೋೋ•══════╗ //
//  N O A S T E R O I D  //
// ╚══════•ೋೋ•══════╝ //
//   DEFENDENDO  MARTE   //

{ //variáveis

  //som
  var frameSom = 3; //animação
  var inicial, jogando; //músicas
  var clique, mudanca, boost, tiro, teleporte, acerto, erro, coletaLixo, coletaEnergia, coletaReparo, batida, derrota, vitoria //toques

  //menu

  var preJogo = 0; //telas da história (0-14)
  var animacao = "a"; //animação do título no inicio do jogo (a/b)
  var mouse = "nao", atirando = "nao"; //mouse/espaco/w pressionado (sim/não)
  var audio = "musicaToque"; //tipo de áudio (mudo/toque/musica/musicaToque)
  var estado = "inicio"; //estado do jogo (inicio/instrucoes/historia/transicao/jogo/fimDeJogo)

  var som, som0, som1; //botões de som
  var reset, reset0; //botão de reiniciar o jogo
  var fundo1, fundo2, fundo3; //backgrounds do jogo
  var controle, controle1; //imagem dos controles do jogo
  var jogar, jogar1, instrucoes, instrucoes1; //botões da tela inicial
  var tituloA, tituloB, tituloC, titulo0, titulo1; //imagens do nome do jogo
  var perdeu, perdeuVida, perdeuCombustivel, ganhou, ganhouImg; //imagens de fim de jogo
  var menu, menuA, menuB, menuC0, menuC1, seta, seta1, skip, skip1; //botões da história

  //jogo

  var nitro = 15; //velocidade da nave
  var move = "não"; //verifica se a nave está movendo;
  var universoQ =  543 //felicidade do Sr. Universo (inversa)
  var asteroidesQ = 0, lixosQ = 0; //qunatidade de asteroides e lixos pegos
  var vidaQ = 197, bateriaQ = 197; //quantidade da vida do jogador / bateria da nave
  var tipoDeMorte; //determina o modo em que o jogador perdeu o jogo (asteroides/combustível)

  var misseis, asteroides, lixos, energias, reparos, bombas; //grupos dos sprites

  //sprites (0: preto e branco / 1+: colorido / M: sprite do menu da tela de jogo)
  var lixo, lixoA0, lixoB0, lixoC0, lixoD0, lixoA1, lixoB1, lixoC1, lixoD1, lixoM;
  var asteroide, asteroide0, asteroide1, asteroideM, asteroideM0, asteroideM1;
  var missel, missel0, missel1, missel2, missel3, missel4, missel5;
  var universo, universo0A, universo0B, universo1;
  var bomba, bomba0, bomba1, explosao0, explosao1;
  var poli, poliA0, poliB0, poliA1, poliB1;
  var bateria, bateria0, bateria1;
  var energia, energia0, energia1;
  var reparo, reparo0, reparo1;
  var marte, marte0, marte1;
  var nastd, nastd0, nastd1;
  var vida, vida0, vida1;
  var banner1, banner2;
}

{ //pre carregamento e configurações

  const pre_carregamento = document.querySelector("div.pre-carregamento"); //carregamento da página

  function preCarregamento(){
    pre_carregamento.style.opacity = "0";
    setTimeout(() => {
      pre_carregamento.style.display = "none";
    }, 2450);
  }

  function preload(){

    //músicas e toques

    inicial = loadSound("Sounds/musicas/inicial.mp3");
    jogando = loadSound("Sounds/musicas/jogando.mp3");

    tiro = loadSound("Sounds/toques/tiro.mp3");
    erro  = loadSound("Sounds/toques/erro.mp3");
    clique = loadSound("Sounds/toques/clique.mp3");
    acerto = loadSound("Sounds/toques/acerto.mp3");
    batida = loadSound("Sounds/toques/batida.mp3");
    mudanca = loadSound("Sounds/toques/mudanca.mp3");
    derrota = loadSound("Sounds/toques/derrota.mp3");
    vitoria = loadSound("Sounds/toques/vitoria.mp3");
    teleporte = loadSound("Sounds/toques/teleporte.mp3");
    coletaLixo = loadSound("Sounds/toques/coletaLixo.mp3");
    coletaReparo = loadSound("Sounds/toques/coletaReparo.mp3");
    coletaEnergia = loadSound("Sounds/toques/coletaEnergia.mp3");

    //menu

    fundo1 = loadImage("Images/fundo/fundo1.jpg");
    fundo2 = loadImage("Images/fundo/fundo2.jpg");
    fundo3 = loadImage("Images/fundo/fundo3.jpg");

    jogar1 = loadImage("Images/menu/jogar.png");
    titulo0 = loadImage("Images/titulo/titulo0.png");
    titulo1 = loadImage("Images/titulo/titulo1.png");
    instrucoes1 = loadImage("Images/menu/instrucoes.png");

    skip1 = loadImage("Images/seta/skip.png");
    menuA = loadImage("Images/menu/menuA.png");
    menuB = loadImage("Images/menu/menuB.png");
    menuC0 = loadImage("Images/menu/menuC0.png");
    menuC1 = loadImage("Images/menu/menuC1.png");
    reset0 = loadImage("Images/reset/reset.png");
    controle1 = loadImage("Images/menu/controle.png");

    ganhouImg = loadImage("Images/fimDeJogo/ganhou.png");

    //sprites   

    seta1 = loadImage("Images/seta/seta.png");

    nastd0 = loadImage("Images/nastd/nastd0.png");
    nastd1 = loadImage("Images/nastd/nastd1.png");

    poliA0 = loadImage("Images/poli/poliA0.png");
    poliA1 = loadImage("Images/poli/poliA1.png");
    poliB0 = loadImage("Images/poli/poliB0.png");
    poliB1 = loadImage("Images/poli/poliB1.png");

    asteroideM0 = loadImage("Images/asteroide/asteroideA0.png");
    asteroideM1 = loadImage("Images/asteroide/asteroideA1.png");

    missel0 = loadImage("Images/missel/missel0.png");
    missel1 = loadImage("Images/missel/missel1.png");
    missel2 = loadImage("Images/missel/missel2.png");
    missel3 = loadImage("Images/missel/missel3.png");
    missel4 = loadImage("Images/missel/missel4.png");
    missel5 = loadImage("Images/missel/missel5.png");

    lixoA0 = loadImage("Images/lixo/lixoA0.png");
    lixoB0 = loadImage("Images/lixo/lixoB0.png");
    lixoC0 = loadImage("Images/lixo/lixoC0.png");
    lixoD0 = loadImage("Images/lixo/lixoD0.png");
    lixoA1 = loadImage("Images/lixo/lixoA1.png");
    lixoB1 = loadImage("Images/lixo/lixoB1.png");
    lixoC1 = loadImage("Images/lixo/lixoC1.png");
    lixoD1 = loadImage("Images/lixo/lixoD1.png");

    universo0A = loadImage("Images/universo/universo0A.png");
    universo0B = loadImage("Images/universo/universo0B.png");
    universo1 = loadImage("Images/universo/universo1.png");

    vida0 = loadImage("Images/vida/vida0.png");
    vida1 = loadImage("Images/vida/vida1.png");

    reparo0 = loadImage("Images/reparo/reparo0.png");
    reparo1 = loadImage("Images/reparo/reparo1.png");

    bateria0 = loadImage("Images/bateria/bateria0.png");
    bateria1 = loadImage("Images/bateria/bateria1.png");

    energia0 = loadImage("Images/energia/energia0.png");
    energia1 = loadImage("Images/energia/energia1.png");

    bomba0 = loadImage("Images/bomba/bomba0.png");
    bomba1 = loadImage("Images/bomba/bomba1.png");

    explosao0 = loadImage("Images/bomba/explosao0.png");
    explosao1 = loadImage("Images/bomba/explosao1.png");
  }

  function setup(){

    createCanvas(windowWidth, windowHeight); 

    //animações

    som0 = loadAnimation("Images/som/somA0.png", "Images/som/somB0.png", "Images/som/somC0.png", "Images/som/somD0.png");
    som1 = loadAnimation("Images/som/somA1.png", "Images/som/somB1.png", "Images/som/somC1.png", "Images/som/somD1.png");
    
    marte0 = loadAnimation("Images/marte/marte1A.png", "Images/marte/marte0B.png", "Images/marte/marte0C.png", "Images/marte/marte0D.png", "Images/marte/marte0D.png");
    marte1 = loadAnimation("Images/marte/marte1A.png", "Images/marte/marte1B.png", "Images/marte/marte1C.png", "Images/marte/marte1D.png");

    asteroide0 = loadAnimation("Images/asteroide/asteroideA0.png", "Images/asteroide/asteroideB0.png", "Images/asteroide/asteroideC0.png", "Images/asteroide/asteroideD0.png");
    asteroide1 = loadAnimation("Images/asteroide/asteroideA1.png", "Images/asteroide/asteroideB1.png", "Images/asteroide/asteroideC1.png", "Images/asteroide/asteroideD1.png");

    perdeuCombustivel = loadAnimation("Images/fimDeJogo/perdeuCombustivel.png");
    perdeuVida = loadAnimation("Images/fimDeJogo/perdeuVida.png");

    //sprites

    jogar = createSprite(width/2, height/2-170);
    jogar.setCollider("rectangle", 0, 0, 560, 232);
    jogar.addImage(jogar1);
    jogar.visible = false;
    jogar.scale = 0.45;

    instrucoes = createSprite(width/2, height/2-30);
    instrucoes.setCollider("rectangle", 0, 0, 560, 232);
    instrucoes.addImage(instrucoes1);
    instrucoes.visible = false;
    instrucoes.scale = 0.45;

    tituloA = createSprite(width/2, height-130);
    tituloA.addImage(titulo1);
    tituloA.visible = false;
    tituloA.velocityX = 5;

    tituloB = createSprite(-2000, height-130);
    tituloB.addImage(titulo1);
    tituloB.visible = false;
    tituloB.velocityX = 5;

    tituloC = createSprite(135, 35);
    tituloC.addImage(titulo0);
    tituloC.visible = false;
    tituloC.scale = 0.4;
    
    controle = createSprite(width/2, height/2-25);
    controle.addImage(controle1);
    controle.visible = false;
    controle.scale = 1.9;

    skip = createSprite(width-50, height-47);
    skip.addImage(skip1);
    skip.visible = false;
    skip.scale = 0.25;
    
    menu = createSprite();
    som = createSprite();
    som.setCollider("rectangle", -40, 0, 205, 200);

    perdeu = createSprite(width/2, height/2-140);
    perdeu.addAnimation("perdeuCombustivel", perdeuCombustivel);
    perdeu.addAnimation("perdeuVida", perdeuVida);
    perdeu.visible = false;

    reset = createSprite(width/2+100, height/2+110);
    reset.setCollider("circle", 0, 30, 150);
    reset.addImage(reset0);
    reset.visible = false;
    reset.scale = 0.35;

    ganhou = createSprite(width/2, height/2-140);
    ganhou.addImage(ganhouImg);
    ganhou.visible = false;
    ganhou.scale = 1.1;

    marte = createSprite(width/2, height/2);
    marte.addAnimation("girando", marte1);
    marte.addAnimation("mudando", marte0);
    marte.visible = false;
    marte.scale = 1.2;

    seta = createSprite(width/2, height-53);
    seta.setCollider("rectangle", 0, 0, 450, 300);
    seta.addImage(seta1);
    seta.visible = false;
    seta.scale = 0.33;

    banner1 = createSprite(width/2, 42.5, width, 85);
    banner2 = createSprite(width/2, height+70, width, 30);
    banner1.shapeColor = 255;
    banner1.visible = false;
    banner1.depth = 1;

    nastd = createSprite(width/2, height-100);
    nastd.setCollider("rectangle", 0, 10, 300, 510);
    nastd.addImage(nastd0);
    nastd.visible = false;
    nastd.scale = 0.3;
    nastd.depth = 2;

    poli = createSprite(width/2, height/2);
    poli.setCollider("rectangle", 0, 0, 400, 750);
    poli.addImage(poliA0);
    poli.visible = false;
    poli.scale = 0.35;
    poli.depth = 2;

    universo = createSprite(width-43, 43);
    universo.addImage(universo0A);
    universo.visible = false;
    universo.scale = 0.2;

    vida = createSprite(330, 25);
    vida.visible = false;
    vida.addImage(vida0);
    vida.scale = 0.06;
    vida.depth = 1;

    bateria = createSprite(330, 57);
    bateria.addImage(bateria0);
    bateria.visible = false;
    bateria.scale = 0.07;
    bateria.depth = 1;

    asteroideM = createSprite(width/2-30, 43);
    asteroideM.addImage(asteroideM0);
    asteroideM.visible = false;
    asteroideM.scale = 0.23;

    lixoM = createSprite(width/2+170, 40);
    lixoM.addImage(lixoA0);
    lixoM.visible = false;
    lixoM.scale = 0.13;

    //grupo de sprites

    asteroides = createGroup();
    misseis = createGroup();
    energias = createGroup();
    reparos = createGroup();
    bombas = createGroup();
    lixos = createGroup();

    //volumes

    coletaEnergia.setVolume(1);
    coletaReparo.setVolume(1);
    teleporte.setVolume(0.3);
    mudanca.setVolume(0.3);
    coletaLixo.setVolume(1);
    vitoria.setVolume(0.5);
    inicial.setVolume(1);
    jogando.setVolume(1);
    derrota.setVolume(1);
    batida.setVolume(10);
    acerto.setVolume(4);
    clique.setVolume(2);
    erro.setVolume(2);
    tiro.setVolume(4);
    inicial.loop();
  }

  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }
}

function draw(){

  //controle do mouse
  if(mouseDown("leftButton")){
    mouse = "sim";
  }else{
    mouse = "nao";
  }

  //definir backgrounds, chamar funções e desenhar sprites

  volumes();

  if(estado === "inicio"){

    background(fundo1);
    inicio();
    drawSprites();

  }else if(estado === "instrucoes"){

    background(fundo2);
    comoJogar();
    drawSprites();

  }else if(estado === "historia"){

    historia();
    marte.play();

  }else if(estado === "transicao"){

    background("#F5D9AB");
    drawSprites();
    transicao();

  }else if(estado === "jogo"){

    background(255);
    drawSprites();
    jogo();
    marte.pause();

  }else if(estado === "perdeu"){
    
    background(255);
    drawSprites();
    fimDeJogo();

  }else{

    background(255);
    drawSprites();
    fimDeJogo();
  }
}

function volumes(){

  //animação do mouse em cima do sprite som

  var mouseSom = "não";

  if(mouseIsOver(som)){
    mouseSom = "sim";
  }

  //configurações do sprite som

  som.pause(); //pausa a animação do botão

  if(estado === "inicio"){

    som.x = width-160, som.y = 110;
    som.addAnimation("som1", som1);
    som.changeAnimation("som1");
    som.setFrame(frameSom);

    if(mouseSom === "sim"){
      som.scale = 0.7;
    }else{
      som.scale = 0.63;
    }
  }

  if(estado === "jogo"){

    som.x = width-170, som.y = 45;

    if(lixosQ >= 24){
      som.addAnimation("som1", som1);
      som.changeAnimation("som1");
    }else{
      som.addAnimation("som0", som0);
      som.changeAnimation("som0");
    }

    som.setFrame(frameSom);

    if(mouseSom === "sim"){
      som.scale = 0.32 
    }else{
      som.scale = 0.30; 
    }
  }

  //sprite som pressionado

  if(mousePressedOver(som) && mouse === "nao"){

    if(audio === "mudo"){ //o audio é alterado para apenas toques

      coletaEnergia.setVolume(1);
      coletaReparo.setVolume(1);
      teleporte.setVolume(0.3);
      coletaLixo.setVolume(1);
      vitoria.setVolume(0.5);
      derrota.setVolume(1);
      batida.setVolume(10);
      clique.setVolume(2);
      acerto.setVolume(4);
      erro.setVolume(2);
      tiro.setVolume(4);

      audio = "toque";
      frameSom = 1;

    }else if(audio === "toque"){ //o audio é alterado para apenas músicas

      coletaEnergia.setVolume(0);
      coletaReparo.setVolume(0);
      coletaLixo.setVolume(0);
      mudanca.setVolume(0.3);
      teleporte.setVolume(0);
      derrota.setVolume(0);
      inicial.setVolume(1);
      jogando.setVolume(1);
      vitoria.setVolume(0);
      acerto.setVolume(0);
      batida.setVolume(0);
      clique.setVolume(0);
      erro.setVolume(0);
      tiro.setVolume(0);

      audio = "musica";
      frameSom = 2;

    }else if(audio === "musica"){ //o audio é alterado para músicas e toques

      coletaEnergia.setVolume(1);
      coletaReparo.setVolume(1);
      teleporte.setVolume(0.3);
      coletaLixo.setVolume(1);
      vitoria.setVolume(0.5);
      derrota.setVolume(1);
      batida.setVolume(10);
      clique.setVolume(2);
      acerto.setVolume(4);
      erro.setVolume(2);
      tiro.setVolume(4);

      audio = "musicaToque";
      frameSom = 3;

    }else{ //o audio é alterado para mudo
      
      coletaEnergia.setVolume(0);
      coletaReparo.setVolume(0);
      coletaLixo.setVolume(0);
      teleporte.setVolume(0);
      derrota.setVolume(0);
      inicial.setVolume(0);
      jogando.setVolume(0);
      mudanca.setVolume(0);
      vitoria.setVolume(0);
      acerto.setVolume(0);
      batida.setVolume(0);
      clique.setVolume(0);
      erro.setVolume(0);
      tiro.setVolume(0);

      audio = "mudo";
      frameSom = 0;
    }

    clique.play(); //efeito sonoro de clique
  }
}

{ //inicio do jogo

  function inicio(){

    //mostra e esconde sprites
    instrucoes.visible = true;
    controle.visible = false;
    banner1.visible = false;
    perdeu.visible = false;
    ganhou.visible = false;
    tituloA.visible = true;
    tituloB.visible = true;
    marte.visible = false;
    reset.visible = false;
    jogar.visible = true;
    menu.visible = false;
    seta.visible = false;
    skip.visible = false;
    som.visible = true;

    //reseta os valores das variáveis
    universoQ = 543;
    asteroidesQ = 0;
    bateriaQ = 197;
    vidaQ = 197;
    preJogo = 0;
    lixosQ = 0;
     
    //edita o menu
    menu.x = 80, menu.y = height-80;
    menu.setCollider("circle", 0, 0, 180);
    menu.addImage(menuA);
    menu.scale = 0.3;
  
    //funções do inicio do jogo
    animacaoTitulo();
    botoesInicio();
  }

  function animacaoTitulo(){

    /*os títulos do início do jogo se movem horizontalmente e quando um
    deles desaparece pela direita da tela, o outro surge na esquerda*/

    if(tituloA.x > width-333 && animacao === "a"){
      animacao = "b";
      tituloB.x = -330;
    }
  
    if(tituloB.x > width-333 && animacao === "b"){
      animacao = "a";
      tituloA.x = -330;
    }
  }

  function botoesInicio(){

    //animações com o mouse em cima dos botões

    cursor("auto");

    if(mouseIsOver(jogar)){
      jogar.scale = 0.5;
      cursor("pointer");
    }else{
      jogar.scale = 0.45;
    }
  
    if(mouseIsOver(instrucoes)){
      instrucoes.scale = 0.5;
      cursor("pointer");
    }else{
      instrucoes.scale = 0.45;
    }

    if(mouseIsOver(som)){
      cursor("pointer");
    }

    //botões pressionados pelo mouse

    if(mousePressedOver(jogar) || mousePressedOver(instrucoes)){
      
      //esconde sprites
      instrucoes.visible = false;
      tituloA.visible = false;
      tituloB.visible = false;
      jogar.visible = false;
      som.visible = false;

      clique.play(); //efeito sonoro de clique
  
      //muda o estado do jogo 
      if(mousePressedOver(jogar)){
        marte.changeAnimation("girando");
        estado = "historia";
      }else{
        estado = "instrucoes"; 
      }
    }
  }
  
  function comoJogar(){
  
    //mostra o tutorial e o botão para voltar
    controle.visible = true;
    menu.visible = true;
  
    //animações com o mouse em cima do botão
    if(mouseIsOver(menu)){
      menu.scale = 0.32;
      cursor("pointer");
    }else{
      menu.scale = 0.3;
      cursor("auto");
    }
  
    //botão pressionado com o mouse
    if(mousePressedOver(menu)){
      tituloA.x = width/2, tituloB.x = -2000;
      estado = "inicio";
      clique.play();
    }
  }
}

{ //história do jogo

  function historia(){

    //mostra e esconde sprites
    marte.visible = true;
    skip.visible = true;
    menu.visible = true;
    seta.visible = true;
    som.visible = false;

    //edita os sprites marte e menu

    marte.frameDelay = 30;
    marte.scale = 1.2;
  
    menu.x = 43, menu.y = height-43;
    menu.setCollider("rectangle", 0, -20, 300, 300);
    menu.addImage(menuB);
   
    //funções da história
    mudarFundo();
    drawSprites();
    botoesHistoria();
    elementos();
  }
  
  function botoesHistoria(){
  
    cursor("auto");
  
    //menu (voltar ao menu)
  
    if(mouseIsOver(menu)){
      menu.scale = 0.27;
      cursor("pointer");
    }else{
      menu.scale = 0.23;
    }
  
    if(mousePressedOver(menu) && mouse === "nao"){
      estado = "inicio";
      clique.play();
      preJogo = 0;
    }
  
    //seta (mudar texto)
  
    if(mouseIsOver(seta)){
      seta.scale = 0.36;
      cursor("pointer");
    }else{
      seta.scale = 0.33;
    }
  
    if(mousePressedOver(seta) && mouse === "nao"){
      clique.play();
      preJogo++;
    }
  
    //skip (pular história)
  
    if(mouseIsOver(skip)){
      skip.scale = 0.3;
      cursor("pointer");
    }else{
      skip.scale = 0.25;
    }
  
    if(mousePressedOver(skip) && mouse === "nao"){
      marte.changeAnimation("mudando");
      marte.setFrame(0);
      inicial.stop();
      mudanca.play();
      clique.play();
      preJogo = 14;
    }
  }
  
  function mudarFundo(){
  
    //o background vai ficando mais claro ao decorrer da história
    if(preJogo === 0){
  
      background("#845919");
  
    }else if(preJogo === 1){
  
      background("#8E6221");
  
    }else if(preJogo === 2){
  
      background("#946D24");
  
    }else if(preJogo === 3){
  
      background("#9C7628");
  
    }else if(preJogo === 4){
  
      background("#AD8034");
  
    }else if(preJogo === 5){
  
      background("#BE8A3F");
  
    }else if(preJogo === 6){
  
      background("#C69646");
  
    }else if(preJogo === 7){
  
      background("#D3A34D");
  
    }else if(preJogo === 8){
  
      background("#D8A959");
  
    }else if(preJogo === 9){
  
      background("#DFAD62");
  
    }else if(preJogo === 10){
  
      background("#E5AF6B");
  
    }else if(preJogo === 11){
  
      background("#E2BA74");
  
    }else if(preJogo === 12){
  
      background("#E7BF82");
  
    }else if(preJogo === 13){
      
      background("#ECC28C");
  
    }else{

      background("#F5DFBA");
    }
  }
  
  function elementos(){

    //fundo da barra de progresso da história
    if(preJogo < 14){
      strokeWeight(3);
      stroke("#4a3413");
      fill("#c9841c")
      rect(-10, 40, width+20, 20);
    }
  
    //configurações do texto da história
    textSize(40);
    textAlign(CENTER);
    textFont("Geórgian");

    //mudança de barra de progresso e texto ao decorrer da história
    if(preJogo === 0){
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("O ano é 2148...", width/2, height/2+20);
  
    }else if(preJogo === 1){
  
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("os humanos finalmente", width/2, height/2);
      text("colonizaram Marte!", width/2, height/2+50);
      
    }else if(preJogo === 2){
          
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*2, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Mas para que isso", width/2, height/2-50);
      text("acontecesse, eles", width/2, height/2);
      text("poluíram muito o", width/2, height/2+50);
      text("espaço sideral", width/2, height/2+100);
      
    }else if(preJogo === 3){
  
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*3, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("e o Sr. Universo não", width/2, height/2);
      text("gostou nadinha disso.", width/2, height/2+50);
      
    }else if(preJogo === 4){
  
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*4, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Então ele resolveu", width/2, height/2);
      text("se vingar!", width/2, height/2+50);
  
    }else if(preJogo === 5){
  
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*5, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Asteroides foram", width/2, height/2-50);
      text("invocados e lançados", width/2, height/2);
      text("em direção ao", width/2, height/2+50);
      text("Planeta Vermelho,", width/2, height/2+100);
  
    }else if(preJogo === 6){
  
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*6, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("e a missão agora", width/2, height/2-50);
      text("é impedir que", width/2, height/2);
      text("eles exterminem", width/2, height/2+50);
      text("tudo e todos.", width/2, height/2+100);
  
    }else if(preJogo === 7){
  
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*7, 20);
  
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Você acaba de ser", width/2, height/2-80);
      text("convocado para", width/2, height/2-30);
      text("pilotar a NASTD-i,", width/2, height/2+20);
      text("a nave desenvolvida", width/2, height/2+70);
      text("pela SpaceX 2.0", width/2, height/2+120);
  
    }else if(preJogo === 8){
  
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*8, 20);
    
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("para aniquilar qualquer", width/2, height/2-50);
      text("tipo de corpo celeste que", width/2, height/2);
      text("seja uma ameaça", width/2, height/2+50);
      text("à população.", width/2, height/2+100);
    
    }else if(preJogo === 9){
    
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*9, 20);
      
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("E para deixar o", width/2, height/2-50);
      text("Sr. Universo feliz,", width/2, height/2);
      text("você e a Poli,", width/2, height/2+50);
      text("sua robô assistente,", width/2, height/2+100);
    
    }else if(preJogo === 10){
  
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*10, 20);
      
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("devem recolher todo", width/2, height/2-30);
      text("o lixo espacial", width/2, height/2+20);
      text("lançado pelos humanos,", width/2, height/2+70);
      
    }else if(preJogo === 11){
  
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*11, 20);
      
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("pois só assim ele irá", width/2, height/2-30);
      text("parar de lançar", width/2, height/2+20);
      text("os asteroides.", width/2, height/2+70);
      
    }else if(preJogo === 12){
  
      noStroke();
      fill("#4a3413");
      rect(0, 40, width/13*12, 20);
      
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Defenda-os e", width/2, height/2-30);
      text("torne-se o", width/2, height/2+20);
      text("herói deles.", width/2, height/2+70);
      
    }else if(preJogo === 13){
  
      noStroke();
      fill("#4a3413dd");
      rect(0, 40, width, 20);
      
      fill(255);
      strokeWeight(4);
      stroke("#BC383E");
      text("Ahh e boa sorte,", width/2, height/2);
      text("pois você vai precisar!!", width/2, height/2+50);

    }else{ 

      estado = "transicao"; //no final da história o estado do jogo é alterado,

      marte.changeAnimation("mudando"); //o sprite marte muda de animação,
      marte.setFrame(0);

      menu.visible = false;
      seta.visible = false; //os botões desaparecem,
      skip.visible = false;

      inicial.stop(); //a música inicial para
      mudanca.play(); //e o som de transição é tocado
    }
  }

  function transicao(){

    noCursor(); //esconde o mouse

    marte.frameDelay = 40; //o sprite marte muda seu tempo de delay
    marte.scale += 0.08; //e começa a aumentar de tamanho (transição)

    if(marte.scale >= 14){ //quando o sprite mouse cobre toda a tela

      mouseX = width/2+100, mouseY = height/2+100; //o mouse muda de posição,
      nastd.x = width/2, nastd.y = height-100; //a nave muda de posição,
      marte.visible = false; //o sprite marte desaparece,
      estado = "jogo"; //o estado do jogo é alterado,
      jogando.loop(); //e a música de jogo é tocada
    }
  }
}

{ //jogo

  function jogo(){

    //mostra e esconde sprites
    asteroideM.visible = true;
    universo.visible = true;
    perdeu.visible = false;
    ganhou.visible = false;
    bateria.visible = true;
    tituloC.visible = true;
    banner1.visible = true;
    reset.visible = false;
    lixoM.visible = true;
    nastd.visible = true;
    vida.visible = true;
    poli.visible = true;
    menu.visible = true;
    som.visible = true;
  
    //edita o sprite menu
    menu.x = width-295, menu.y = 45;
    menu.addImage(menuC0);
    menu.scale = 0.2;

    //chama as funções do jogo
    gerador();
    nave();
    feedbacks();
    robo();
    botoesDoJogo();
    mudancaDeCor();

    if(vidaQ < 10 || bateriaQ <= 1){ //perder o jogo

      estado = "perdeu";
      jogando.pause();
      derrota.play();

      if(vidaQ < 10){
        perdeu.changeAnimation("perdeuVida");
      }else{
        perdeu.changeAnimation("perdeuCombustivel");
      }
    }

    if(lixosQ > 25){ //ganhar o jogo
      estado = "ganhou";
      jogando.stop();
      vitoria.play();
    }
  }

  function botoesDoJogo(){
    
    //animação com o mouse em cima 

    if(mouseIsOver(menu)){
      cursor("pointer");
      menu.scale = 0.23;
    }else{
      menu.scale = 0.2;
    }

    if(mouseIsOver(som)){
      cursor("pointer");
    }

    //botão menu pressionado pelo mouse
    if(mousePressedOver(menu)){

      estado = "inicio"; //mudança de estado

      //sons
      clique.play();
      jogando.stop();
      inicial.loop();

      //destroi os sprites
      lixos.destroyEach();
      misseis.destroyEach();
      reparos.destroyEach();
      energias.destroyEach();
      asteroides.destroyEach();

      //esconde sprites
      vida.visible = false;
      poli.visible = false;
      nastd.visible = false;
      lixoM.visible = false;
      tituloC.visible = false;
      bateria.visible = false;
      universo.visible = false;
      asteroideM.visible = false;

      tituloA.x = width/2, tituloB.x = -2000; //reseta a posição dos títulos 
    }
  }

  function nave(){
  
    //movimento

    if(keyDown("shift")){
      nitro = 35;
      if(move === "sim"){
        bateriaQ -= 0.5;
      }
    }else{
      nitro = 18;
    }

    move = "nao";
  
    if(keyDown("a") || keyDown("LEFT_ARROW")){
      bateriaQ -= 0.2;
      nastd.x -= nitro;
      move = "sim";
    }
  
    if(keyDown("d") || keyDown("RIGHT_ARROW")){
      bateriaQ -= 0.2;
      nastd.x += nitro;
      move = "sim";
    }
  
    if(nastd.x < 45){
      nastd.x = width-105;
      teleporte.play();
      bateriaQ -= 2;
    }
  
    if(nastd.x > width-105){
      teleporte.play();
      bateriaQ -= 2;
      nastd.x = 45;
    }
  
    //tiro
  
    if((keyDown("space") || keyDown("w") || keyDown("UP_ARROW")) && atirando === "nao"){

      missel = createSprite(nastd.x, nastd.y-80);
      missel.velocityY = -10;
      missel.lifetime = 60;
      misseis.add(missel);
      missel.scale = 0.1;
      missel.depth = 0;
      bateriaQ -= 2;

      tiro.play();

      var cores = Math.round(random(1, 5)); //os mísseis possuem uma cor escolhida entre 5 aleatórias

      if(lixosQ <= 12){
        missel.addImage(missel0);
      }else{

        switch(cores){
        
          case 1: missel.addImage(missel1);
          break;
          
          case 2: missel.addImage(missel2);
          break;
          
          case 3: missel.addImage(missel3);
          break;
          
          case 4: missel.addImage(missel4);
          break;
          
          case 5: missel.addImage(missel5);
          break;
          default: break;
        }
      }
    }

    atirando = "nao";
  
    if(keyDown("space") || keyDown("w") || keyDown("UP_ARROW")){
      atirando = "sim";
    }

    //colisões

    //asteroides e nave ou tela
    if(nastd.isTouching(asteroides) || banner2.isTouching(asteroides)){

      if(vidaQ > 196/2){
        if(nastd.isTouching(asteroides)){
          batida.play();
        }else{
          erro.play();
        }
      }

      asteroides.destroyEach();
      vidaQ -= 196/4;
    }

    //asteroides e mísseis
    if(misseis.isTouching(asteroides)){
      asteroides.destroyEach();
      misseis.destroyEach();
      asteroidesQ++;
      acerto.play();
    }

    //nave e energia
    if(nastd.isTouching(energias)){
      energias.destroyEach();
      coletaEnergia.play();
      bateriaQ = 197;
    }

    //nave e reparo
    if(nastd.isTouching(reparos)){

      if(vidaQ < 197 && vidaQ > 100){
        vidaQ += 196/4;
      }else if(vidaQ < 100){
        vidaQ += 196/2;
      }

      reparos.destroyEach();
      coletaReparo.play();
    }
  }
  
  function feedbacks(){

    //chama as funções de feedbacks do jogo
    asteroidesLixos();
    barras();      
  }
  
  function asteroidesLixos(){

    textSize(70);
    strokeWeight(5);
    textAlign(CENTER);
    textFont("Geórgian");
  
    //asteroides

    if(lixosQ <= 22){
      fill(255);
      stroke(0);
    }else{
      stroke("#7a3d36");
      fill("#994f46");
    }

    if(asteroidesQ < 10){
      text("0"+asteroidesQ, asteroideM.x+80, 63);
    }else{
      text(asteroidesQ, asteroideM.x+80, 63);
    }

    //lixos
  
    if(lixosQ <= 13){
      fill(255);
      stroke(0);
    }else{
      stroke("#753608");
      fill("#bf5306");
    }

    if(lixosQ < 10){
      text("0"+lixosQ, lixoM.x+90, 63);
    }else{
      text(lixosQ, lixoM.x+90, 63);
    }  
  }

  function barras(){

    //barras de vida e combustível

    bateriaQ -= 0.1; //o combustível da nave diminui com o tempo

      //externas
      fill(255);
      strokeWeight(3);

      if(lixosQ <= 2){
        stroke(0);
      }else{
        stroke("#73110b")
      }
      rect(vida.x+35, vida.y-10, 200,  20);

      if(lixosQ <= 7){
        stroke(0);
      }else{
        stroke("#151a5c");
      }
      rect(vida.x+35, bateria.y-10, 200, 20);

      //internas
      noStroke();
      if(lixosQ <= 5){
        fill("#242424");
      }else{
        fill("#9e1f18")
      }
      rect(vida.x+37, vida.y-8, vidaQ,  17);

      if(lixosQ <= 10){
        fill("#242424");
      }else{
        fill("#2c3396")
      }
      rect(vida.x+37, bateria.y-8, bateriaQ,  17);
  
    //barras do Sr. Universo

      //externa
      if(lixosQ <= 8){
        stroke(0);
      }else if(lixosQ <= 14){
        stroke("#4a0804");
      }else if(lixosQ <= 20){
        stroke("#c99d16");
      }else{
        stroke("#568046");
      }

      if(lixosQ <= 14){
        fill("#e33636");
      }else if(lixosQ <= 20){
        fill("#edbb24");
      }else{
        fill("#78b560");
      }

      strokeWeight(3);
      rectMode(CENTER);
      rect(universo.x, height/2+38, 20, 545.5);

      //interna
      fill(255);
      noStroke();
      rectMode(CORNER);
      rect(universo.x-8, universo.y+52.5, 16.5, universoQ);
  }
  
  function robo(){
  
    //movimento
  
    if(mouseY < 120){
      cursor("auto");
    }else{
      noCursor();
      poli.x = mouseX;
      poli.y = mouseY;
    }
  
    if(mouseX < 20){
      mouseX = 20;
      poli.x = 20
    }
  
    if(mouseX > width-80){
      mouseX = width-80;
      poli.x = width-80;
    }
  
    if(mouseY > height-37){
      mouseY = height-37;
      poli.y = height-37;
    }
  
    //coleta

    if(mousePressedOver(lixo)){

      if(lixosQ < 5){
        poli.addImage(poliB0);
      }else{
        poli.addImage(poliB1);
      }

    }else{

      if(lixosQ < 5){
        poli.addImage(poliA0);
      }else{
        poli.addImage(poliA1);
      }
    }
    
    if(mousePressedOver(lixo) && poli.isTouching(lixos)){
      lixos.destroyEach();
      universoQ -= 543/25;
      lixosQ++;

      if(lixosQ < 26){
        coletaLixo.play();
      }
    }
  }
  
  function gerador(){
  
    let posXA = random(60, width-120); //asteroides
    let posXL = random(60, width-120); //Lixos
    let posXE = random(60, width-120); //Energia
    let posXR = random(60, width-120); //Reparos
  
    //asteroides
    if(frameCount % 90 === 0){
      asteroide = createSprite(posXA, -10);
      asteroide.setCollider("circle", -10, 0, 130);
      asteroides.add(asteroide);
      asteroide.velocityY = 8;
      asteroide.lifetime = 200;
      asteroide.scale = 0.3;
      asteroide.depth = 0;
      if(lixosQ <= 3){
        asteroide.addAnimation("asteroide0", asteroide0);
        asteroide.frameDelay = 10;
      }else{
        asteroide.addAnimation("asteroide1", asteroide1);
        asteroide.frameDelay = 10;
      }
    }

    //lixos
    if(frameCount % 120 === 0){
      lixo = createSprite(posXL, -10);
      lixo.setCollider("rectangle", 0, 0, 450, 450);
      lixo.lifetime = 200;
      lixo.velocityY = 10;
      lixo.scale = 0.15;
      lixos.add(lixo);
      lixo.depth = 0;

      var angulo = Math.round(random(1, 4)); //o lixo aparece em uma angulação entre 4 aleatórias

      if(lixosQ <= 21){
        
        switch(angulo){
        
          case 1: lixo.addImage(lixoA0);
          break;
          
          case 2: lixo.addImage(lixoB0);
          break;
          
          case 3: lixo.addImage(lixoC0);
          break;
          
          case 4: lixo.addImage(lixoD0);
          break;
          default: break;
        }

      }else{
        
        switch(angulo){
        
          case 1: lixo.addImage(lixoA1);
          break;
          
          case 2: lixo.addImage(lixoB1);
          break;
          
          case 3: lixo.addImage(lixoC1);
          break;
          
          case 4: lixo.addImage(lixoD1);
          break;
          default: break;
        }
      }
    }
  
    //energia
    if(frameCount % 850 === 0){
      energia = createSprite(posXE, -10);
      energia.velocityY = 10;
      energia.lifetime = 200;
      energias.add(energia);
      energia.scale = 0.1;
      energia.depth = 0;

      if(lixosQ <= 17){
        energia.addImage(energia0);
      }else{
        energia.addImage(energia1);
      }
    }
  
    //reparo
    if(frameCount % 2500 === 0){
      reparo = createSprite(posXR, -10);
      reparo.velocityY = 5;
      reparo.lifetime = 200;
      reparos.add(reparo);
      reparo.scale = 0.1;
      reparo.depth = 0;

      if(lixosQ <= 18){
        reparo.addImage(reparo0);
      }else{
        reparo.addImage(reparo1);
      }
    }
  }

  function mudancaDeCor(){

    /*inicialmente, os sprites do jogo começam em preto e branco,
    mas a cada lixo coletado, cada um deles ficam coloridos*/

    if(lixosQ >= 2){
      bateria.addImage(bateria1);
    }else{
      bateria.addImage(bateria0);
    }

    if(lixosQ >= 7){
      lixoM.addImage(lixoA1);
    }else{
      lixoM.addImage(lixoA0);
    }

    if(lixosQ >= 10){
      nastd.addImage(nastd1);
    }else{
      nastd.addImage(nastd0);
    }

    if(lixosQ >= 12){
      vida.addImage(vida1);
    }else{
      vida.addImage(vida0);
    }

    if(lixosQ >= 16){
      menu.addImage(menuC1);
    }else{
      menu.addImage(menuC0);
    }

    if(lixosQ >= 17){
      asteroideM.addImage(asteroideM1);
    }else{
      asteroideM.addImage(asteroideM0);
    }

    if(lixosQ >= 20){
      tituloC.addImage(titulo1);
    }else{
      tituloC.addImage(titulo0);
    }

    if(lixosQ < 15){
      universo.addImage(universo0A);
    }

    if(lixosQ >= 15 && lixosQ < 25){
      universo.addImage(universo0B);
    }
    
    if(lixosQ >= 25){
      universo.addImage(universo1);
    }
  }
}

{ //fim do jogo

  function fimDeJogo(){

    //mostra e esconde sprites
    som.visible = false;
    reset.visible = true;
    vida.visible = false;
    poli.visible = false;
    nastd.visible = false;
    lixoM.visible = false;
    tituloC.visible = false;
    bateria.visible = false;
    universo.visible = false;
    asteroideM.visible = false;

    if(estado === "perdeu"){
      perdeu.visible = true;
    }else{
      ganhou.visible = true;
    }

    //destroi sprites
    lixos.destroyEach();
    misseis.destroyEach();
    reparos.destroyEach();
    energias.destroyEach();
    asteroides.destroyEach();

    //edita o sprite menu
    menu.x = width/2-100, menu.y = height/2+120;
    menu.addImage(menuC0);
    menu.scale = 0.4;

    botoesFim(); //chama a função de botões do fim de jogo
  }

  function botoesFim(){

    cursor("auto");

    //animações com o mouse em cima dos botões menu e reset

    if(mouseIsOver(menu)){
      cursor("pointer");
      menu.scale = 0.45;
    }else{
      menu.scale = 0.4;
    }

    if(mouseIsOver(reset)){
      cursor("pointer");
      reset.scale = 0.4;
    }else{
      reset.scale = 0.35;
    }

    //botões menu e reset pressionados 

    if(mousePressedOver(menu) || mousePressedOver(reset)){

      clique.play();

      //reseta os valores das variáveis
      asteroidesQ = 0;
      universoQ = 543;
      bateriaQ = 197;
      vidaQ = 197;
      preJogo = 0;
      lixosQ = 0;

      nastd.x = width/2; //posiciona a nave no centro da tela

      if(mousePressedOver(reset)){

        estado = "jogo";
        jogando.loop();

      }else{

        tituloA.x = width/2, tituloB.x = -2000;
        estado = "inicio";
        inicial.loop();
        jogando.stop();
      }
    }
  }
}
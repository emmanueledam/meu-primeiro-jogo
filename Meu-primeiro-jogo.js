;; let personagem
let grama



let velocidade = 64

let andarX = 0
let andarY = 0



function setup() {
    createCanvas(576, 576);

    personagem = loadImage('charmander-removebg-preview.png')
    grama = loadImage('grama.jpg')


}

function draw() {
    if (andarX < 0) {
        andarX = 0
    }
    if (andarX > tamanho * 8) {
        andarX = 0
    }
    if (andarY < 0) {
        andarY = 0
    }
    if (andarY > tamanho * 8) {
        andar = 0
    }

    background(255); //seta cor do bg 
    //rect (30, 40, 50, 50) cria retangulo, quadrado

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            image(grama, tamanho * i, tamanho * j, tamanho, tamanho)
        }
    }


    image(personagem, andarX, andarY, 64, 64)

    if (andarX === 512 && andarY === 512) {
        rect(160, 160, 256, 256)
        textSize('Ganhou', 220, 300)

        restart = createButton('Reiniciar')
        restart.mousePressed(reset)

        noLoop()
    }
}

function reset() {
    andarX = 0
    andarY = 0
    restart.remove()
    loop()
}

function keyPressed() {
    if (keyIsDown(UP_ARROW)) {
        andarY -= velocidade
    }
    if (keyIsDown(DOWN_ARROW)) {
        andarY += velocidade
    }
    if (keyIsDown(LEFT_ARROW)) {
        andarX -= velocidade
    }
    if (keyIsDown(RIGHT_ARROW)) {
        andarX += velocidade
    }
}

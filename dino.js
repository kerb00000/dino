import { Dinosaur } from './dinosaur.js'
import { Cactus } from './cactus.js'

import { Bird } from './bird.js'

export default class Game {
    constructor() {

 this.sprite_sheet = new Image()
        this.sprite_sheet.src = "dinosprites.png"
        this.sprites = {
            "standing": { x: 1338, y: 2, w: 88, h: 94 },
            "walking1": { x: 1514, y: 2, w: 88, h: 94 },
            "walking2": { x: 1602, y: 2, w: 88, h: 94 },
        }


        const canvas = document.getElementById("game")
        this.ctx = canvas.getContext("2d")
        this.Dinosaur = new Dinosaur(this)
        this.Cactus = new Cactus(this)
        this.bird = new Bird(this)

    
    }


    run() {
        console.log("running the game")
        this.frame()
    }


    frame() {
        this.ctx.clearRect(0, 0, 800, 600)
        this.ctx.font = "30px monospace"
        this.ctx.fillStyle = "rgba(255, 255, 1)"
        this.ctx.fillText("dino", 410, 250)

        this.ctx.strokeStyle = "black"
        this.ctx.beginPath()
        this.ctx.moveTo(10, 200)
        this.ctx.lineTo(780, 200)
        this.ctx.stroke()


        this.Dinosaur.draw(this.ctx)
        this.Bird.draw(this.ctx)
        this.Cactus.draw(this.ctx)
        window.requestAnimationFrame(this.frame.bind(this))

    }

  }

// 1514, 2 (TL)
// 1602, 96 (BR)
// 88 (width)
// 94 (height)

//FOR CACTUS #1 (the medium size one really close to another cactus)
// -50 (width)
// -100 (height)
import { Dinosaur } from './dinosaur.js'
import { Cactus } from './cactus.js'

import { Bird } from './bird.js'

export default class Game {
    constructor() {

 this.sprite_sheet = new Image()
        this.sprite_sheet.src = "dinosprites.png"
        this.sprites = {
            "standing": { x: 1338, y: 2, w: 89, h: 94, cx: 38, cy: 94 },
            "walking1": { x: 1514, y: 2, w: 89, h: 94, cx: 38, cy: 94 },
            "walking2": { x: 1602, y: 2, w: 89, h: 94, cx: 38, cy: 94 },
            "bird1": { x: 260, y: 14, w: 93, h: 69, cx: 28, cy: 20 },
            "bird2": { x: 352, y: 2, w: 93, h: 60, cx: 28, cy: 32 },
            "cactus1": { x: 652, y: 2, w: 50, h: 100, cx: 24, cy: 96 },
            "cactus2": { x: 702, y: 2, w: 49, h: 100, cx: 24, cy: 96 },
        }


        const canvas = document.getElementById("game")
        this.ctx = canvas.getContext("2d")
        this.dinosaur = new Dinosaur(this)
        this.cactus = new Cactus(this)
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


        this.dinosaur.draw(this.ctx)
        this.bird.draw(this.ctx)
        this.cactus.draw(this.ctx)

        this.cactus.animate()
        this.bird.animate()
        this.dinosaur.animate()
    
if (this.dino.collides_with(this.cactus)) {
    console.log("Hit Cactus!")

}

        window.requestAnimationFrame(this.frame.bind(this))

        
    }

  }


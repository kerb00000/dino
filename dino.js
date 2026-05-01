import settings from './settings.js'

import { Dinosaur } from './dinosaur.js'
import { Cactus } from './cactus.js'

import { Bird } from './bird.js'

const PLAYING = "PLAYING"
const LOST = "LOST"

export default class Game {
    constructor() {
        this.score = 0
        this.state = PLAYING

        this.sprite_sheet = new Image()
        this.sprite_sheet.src = "dinosprites.png"
        this.sprites = {
            "standing": { x: 1338, y: 2, w: 89, h: 94, cx: 38, cy: 94 },
            "walking1": { x: 1514, y: 2, w: 89, h: 94, cx: 38, cy: 94 },
            "walking2": { x: 1602, y: 2, w: 89, h: 94, cx: 38, cy: 94 },
            "crouching1": { x: 1862, y: 36, w: 118, h: 60, cx: 34, cy: 60 },
            "crouching2": { x: 1980, y: 36, w: 118, h: 60, cx: 34, cy: 60 },
            "bird1": { x: 260, y: 14, w: 93, h: 69, cx: 28, cy: 20 },
            "bird2": { x: 352, y: 2, w: 93, h: 60, cx: 28, cy: 32 },
            "cactus1": { x: 652, y: 2, w: 50, h: 100, cx: 24, cy: 96 },
            "cactus2": { x: 702, y: 2, w: 49, h: 100, cx: 24, cy: 96 }

        }


        this.canvas = document.getElementById("game")
        this.ctx = this.canvas.getContext("2d")
        this.dinosaur = new Dinosaur(this)

        this.obstacles = []



        this.bird = new Bird(this)
        this.obstacles.push(this.bird)

        this.cactus_counter = 30
        this.bird_counter = 2000

    }


    run() {
        console.log("running the game")
        this.frame()
    }


    frame() {
        this.ctx.clearRect(0, 0, 800, 600)
        this.ctx.font = "30px monospace"
        this.ctx.fillStyle = "rgba(255, 255, 1)"
        this.ctx.fillText("", 410, 250)

        this.ctx.strokeStyle = "black"
        this.ctx.beginPath()
        this.ctx.moveTo(10, settings.floor_y)
        this.ctx.lineTo(780, settings.floor_y)
        this.ctx.stroke()

        this.score += 1

        this.ctx.font = "30px times"
        this.ctx.fillStyle = "blue";
        var actual_score = Math.round(this.score / 10)
        this.ctx.fillText(`${actual_score}`, 400, 50);

        if (this.state == PLAYING) {
            this.score += 1
        }

        console.log(this.obstacles)

        for (const obstacle of this.obstacles) {
            obstacle.draw(this.ctx)

            if (this.dinosaur.collides_with(obstacle)) {
                console.log("Hit Object!")
                this.state = LOST
            }}
            console.log(this.cactus_counter)
            this.obstacles = this.obstacles.filter(o => o.x > -50)

            this.cactus_counter -= 1
            if (this.cactus_counter == 0) {
                var cactus = new Cactus(this)
                this.obstacles.push(cactus)
                this.cactus_counter = 100
            }

            this.bird_counter -= 1
            if (this.bird_counter == 0) {
                var bird = new Bird(this)
                this.obstacles.push(bird)
                this.bird_counter = 1000
            }
        

        this.dinosaur.draw(this.ctx)
        //this.bird.draw(this.ctx)
        //this.cactus.draw(this.ctx)

        if (this.state == PLAYING) {
            for (const obstacle of this.obstacles) {
                obstacle.animate(this.ctx)
            }
            this.dinosaur.animate()


        } else if (this.state == LOST) {
            this.ctx.font = "60px times"
            this.ctx.fillStyle = "blue";
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle"
            this.ctx.fillText("YOU LOST!",
                this.canvas.width / 2, this.canvas.height / 2);
        }


        window.requestAnimationFrame(this.frame.bind(this))


    }

}


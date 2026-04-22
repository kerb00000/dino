


import { Sprite } from './sprite.js'
export class Dinosaur extends Sprite {
    constructor(game) {
        super(game)

        this.x = 100
        this.y = 100
        this.dy = 0
        document.addEventListener("keydown", this.keydown.bind(this))
        this.set_sprite("standing")
    }

    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()


        if (this.y == 200) {
            this.dy = -3.5
        }

    }


    animate(ctx) {


       



        this.y += this.dy;
        this.dy += 0.1


        if (this.y > 200) {
            this.dy = 0
            this.y = 200

        }
    }
}
//right side is 444, 69; left side is 352, 2

import settings from './settings.js'

import { Sprite } from './sprite.js'
export class Dinosaur extends Sprite {
    constructor(game) {
        super(game)

        this.x = 100
        this.y = settings.floor_y
        this.dy = 0
        document.addEventListener("keydown", this.keydown.bind(this))
        this.set_sprite("standing")
    }

    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()


        if (this.y == settings.floor_y) {
            this.dy = settings.gravity_dy
        }

    }


    animate(ctx) {


       



        this.y += this.dy;
        this.dy += settings.gravity_dy


        if (this.y > settings.floor_y) {
            this.dy = 0
            this.y = settings.floor_y

        }
    }
}
//right side is 444, 69; left side is 352, 2
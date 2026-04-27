
import settings from './settings.js'

const STANDING = "standing"
const WALKING = "walking"
const CROUCHING = "crouching"

import { Sprite } from './sprite.js'
export class Dinosaur extends Sprite {
    constructor(game) {
        super(game)

        this.x = 100
        this.y = settings.floor_y
        this.dy = 0
        document.addEventListener("keydown", this.keydown.bind(this))

this.state = STANDING

        this.current_sprite = "walking1"
        this.set_sprite(this.current_sprite)
        this.walk_counter =  10
    }

    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()


        if (this.y == settings.floor_y) {
            this.dy = -settings.jump_dy
            console.log ("jumping")
        }


    }

    set_state(state) {
        this.state = state
        if (this.state == STANDING){
            this.current_spreit = "standing"
         } else if (this.state == WALKING) {
            this.current_sprite = "walking1"
            this.walking_counter = 10
         }
    }

    animate(ctx) {


       



        this.y += this.dy;
        this.dy += settings.gravity_dy


        if (this.y > settings.floor_y) {
            this.dy = 0
            this.y = settings.floor_y

        }

    if (this.state == WALKING) {
 this.walk_counter -= 1
        if (this.walk_counter == 0) {
            this.walk_counter = 10

            if (this.current_sprite == "walking1") {
                this.current_sprite = "walking2"
            } else {
                this.current_sprite = "walking1"
            }

        }
    }
        this.set_sprite(this.current_sprite)



    }
}
//right side is 444, 69; left side is 352, 2
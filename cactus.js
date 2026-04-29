import settings from './settings.js'
import { Sprite } from './sprite.js'

export class Cactus extends Sprite {
    constructor(game) {
        super(game)
        this.x = 500    //right side of
        this.y = settings.floor_y   //floor level 

        this.set_sprite("cactus1")
    }



    animate() {
        this.x -= settings.cactus_speed
    }

}
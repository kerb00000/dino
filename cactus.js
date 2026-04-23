import { Sprite } from './sprite.js'

export class Cactus extends Sprite {
    constructor(game) {
        super(game)
        this.x = 315    //right side of
        this.y = 200    //floor level 

        this.set_sprite("cactus1")
    }



    animate() {
        this.x -= 1
    }

}
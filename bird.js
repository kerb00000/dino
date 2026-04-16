export class Bird {
    constructor(game) {
        this.x = 600 
        this.y = 200
        this.game = game
    }
    draw(ctx){
        
        var current_sprite = "bird2"
        var sprite = this.game.sprites[current_sprite]

        this.scale = 0.6
        ctx.drawImage(this.game.sprite_sheet,
            sprite.x,sprite.y,
            sprite.w,sprite.h,
            this.x - sprite.w * this.scale / 2,
            this.y - sprite.h * this.scale,
            sprite.w * this.scale,
            sprite.h * this.scale
        )
    }
}
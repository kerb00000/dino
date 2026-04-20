export class Sprite {
    constructor(game) {
        this.current_sprite = "cactus1"
        this.game = game
        this.scale = 0.5
    }

    draw(ctx) {

        var current_sprite = "cactus1"
        var sprite = this.game.sprites[current_sprite]


        ctx.drawImage(this.game.sprite_sheet,
            sprite.x, sprite.y,
            sprite.w, sprite.h,
            this.x - sprite.cx * this.scale,
            this.y - sprite.cy * this.scale,
            sprite.w * this.scale,
            sprite.h * this.scale
        )
    }
}
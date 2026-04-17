export class Cactus {
    constructor(game) {
        this.x = 315    //right side of
        this.y = 200    //floor level
        this.game = game
    }

    draw(ctx) {

    ctx.fillStyle = "rgb(0, 0, 0"
    ctx.beginPath()
    
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.strokeRect(300, 120, 30, 80);

    var current_sprite = "cactus1"
        var sprite = this.game.sprites[current_sprite]

        this.scale = 0.6
        ctx.drawImage(this.game.sprite_sheet,
            sprite.x,sprite.y,
            sprite.w,sprite.h,
            this.x - sprite.cx * this.scale,
            this.y - sprite.cy * this.scale,
            sprite.w * this.scale,
            sprite.h * this.scale
        )
    }
}


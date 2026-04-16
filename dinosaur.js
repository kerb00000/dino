export class Dinosaur {
    constructor(game) {
        this.x = 100
        this.y = 100
        this.dy = 0
        document.addEventListener("keydown", this.keydown.bind(this))
        this.game = game
    }

    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()
      

       if (this.y == 200) {
            this.dy = -3.5
        }

    }


    draw(ctx) {


        ctx.fillStyle = "rgb(255, 145, 0"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2)
        ctx.fill()

        var current_sprite = "walking2"
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




        this.y += this.dy;
        this.dy += 0.1


        if (this.y > 200) {
            this.dy = 0
            this.y = 200

        }
    }
}
//right side is 444, 69; left side is 352, 2
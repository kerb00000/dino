export class Dinosaur {
    constructor() {
        this.x = 100
        this.y = 100
        this.dy = 0
        document.addEventListener("keydown", this.keydown.bind(this))

        this.sprite_sheet = new Image()
        this.sprite_sheet.src = "dinosprites.png"
        this.sprites = {
            "standing": { x: 1338, y: 2, w: 88, h: 94 },
            "walking1": { x: 1514, y: 2, w: 88, h: 94 },
            "walking2": { x: 1602, y: 2, w: 88, h: 94 },
        }

    }

    keydown(event) {
        console.log("key pressed", event)
        this.dy += -20

    }


    draw(ctx) {


        ctx.fillStyle = "rgb(255, 145, 0"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2)
        ctx.fill()

        var current_sprite = "walking2"
        var sprite = this.sprites[current_sprite]

        this.scale = 0.6
        ctx.drawImage(this.sprite_sheet,
            sprite.x,sprite.y,
            sprite.w,sprite.h,
            this.x - sprite.w * this.scale / 2,
            this.y - sprite.h * this.scale,
            sprite.w * this.scale,
            sprite.h * this.scale
        )




        this.y += this.dy;
        this.dy += 3

        if (this.y > 200) {
            this.dy = 0
            this.y = 200

        }
    }
}

export class Dinosaur {
    constructor() {
        this.x = 100
        this.y = 100
        this.dy = 0
        document.addEventListener("keydown", this.keydown.bind(this))
        this.sprite_sheet = new Image()
        this.sprite_sheet.src = "dinosprites.png"
         this.sprite = { x: 1514, y: 2, w: 88, h: 94 }
        //top left and width and height 4 sprite

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

        
        ctx.drawImage(this.sprite_sheet,
            this.sprite.x, this.sprite.y,
            this.sprite.w, this.sprite.h,
            this.x, this.y,
           this.sprite.w, this.sprite.h
        )

        this.y += this.dy;
        this.dy += 3

        if (this.y > 200) {
            this.dy = 0
            this.y = 200

        }
    }
}

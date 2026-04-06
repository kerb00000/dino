export class Dinosaur {
    constructor() {
        this.x = 100
        this.y = 100
        this.dy = 0
        document.addEventListener("keydown", this.keydown.bind(this))
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



        this.y += this.dy;
        this.dy += 3

        if (this.y > 200) {
            this.dy = 0
            this.y = 200

        }
    }
}

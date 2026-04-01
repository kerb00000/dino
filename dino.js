export default class Game {
    constructor() {

        const canvas = document.getElementById("game")
        this.ctx = canvas.getContext("2d")
    }
    run() {
        console.log("running the game")
        //this.frame()
    }
    frame() {
        this.ctx.clearRect(0, 0, 800, 600)
        this.ctx.font = "30px monospace"
        this.ctx.fillStyle = "rgba(255, 255, 1)"
        this.ctx.fillText("dino", 410, 250)
    window.requestAnimationFrame(this.frame.bind(this))
    }
}

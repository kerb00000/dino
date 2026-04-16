export class Cactus {
    constructor(game) {
        this.x = 600    //right side of
        this.y = 200    //floor level
        this.game = game
    }

    draw(ctx) {

    ctx.fillStyle = "rgb(0, 0, 0"
    ctx.beginPath()
    
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.strokeRect(300, 120, 30, 80);


    }
}
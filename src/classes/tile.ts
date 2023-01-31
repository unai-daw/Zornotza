export class Tile {

    x:number;
    y:number;
    letter:string;
    bg_color:string;
    color:string;
    size:number;
    letter_size:number;
    letter_font:string = "Monospace";
    size_factor:number = 0.8;

    constructor(x: number, y: number,size:number,letter:string = '', bg_color:string= "rgba(0,0,0,0)", color:string = "rgba(0,0,0,1)") {
        this.size = size;
        this.x = x;
        this.y = y;
        this.letter = letter;
        this.bg_color = bg_color;
        this.color = color;
        this.letter_size = size*this.size_factor;
    }

    draw(ctx:any){
        ctx.fillStyle = this.bg_color;
        let dx= this.x * this.size;
        let dy= this.y * this.size;
        ctx.fillRect(dx,dy,this.size,this.size);
        ctx.fillStyle = this.color;
        ctx.font = Math.round(this.letter_size).toString() + "px " + this.letter_font;
        ctx.fillText(this.letter,dx+this.size/3.7,dy+this.size/1.4);
    }
}

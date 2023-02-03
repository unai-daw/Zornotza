export class Piece {
    x:number;
    y:number;
    width:number;
    height:number;
    x_real:number;
    y_real:number;
    img:any;

    constructor(x_real:number,y_real:number,width:number,height:number,img:any) {
        this.x_real = x_real;
        this.y_real = y_real;
        this.width = width;
        this.height = height;
        this.img = img;
    }

    draw(ctx:any){
        
        ctx.drawImage(this.img,this.x_real*this.width,this.y_real*this.height,this.width,this.height,this.x*this.width,this.y*this.height,this.width,this.height);
    }

}
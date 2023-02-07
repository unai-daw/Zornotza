export class Piece {
    x:number;
    y:number;
    width:number;
    height:number;
    width_real:number;
    height_real:number;
    x_real:number;
    y_real:number;
    img:any;

    constructor(x_real:number,y_real:number,x:number,y:number,width_real:number,height_real:number,width:number,height:number,img:any) {
        this.x_real = x_real;
        this.y_real = y_real;
        this.x = x;
        this.y = y;
        this.width_real = width_real;
        this.height_real = height_real;
        this.width = width;
        this.height = height;
        this.img = img;
    }

    draw(ctx:any){
        ctx.drawImage(this.img,
            this.x_real*this.width_real,
            this.y_real*this.height_real,
            this.width_real,this.height_real,
            this.x*this.width,this.y*this.height,
            this.width,this.height);
    }

}
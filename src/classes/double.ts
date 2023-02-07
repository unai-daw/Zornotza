export class Double {
    x:number;
    y:number;
    width:number;
    height:number;
    img:any;
    scale:any;

    constructor(x_real:number,y_real:number,x:number,y:number,width_real:number,height_real:number,width:number,height:number,img:any) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
    }

    draw(ctx:any){
        ctx.drawImage(this.img,this.x*this.width,this.y*this.height,this.width,this.height);
    }

}
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Functions } from 'src/classes/functions';
import {Piece} from '../../classes/piece'
@Component({
  selector: 'app-nagelen-eskultura-jokua',
  templateUrl: './nagelen-eskultura-jokua.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class NagelenEskulturaJokuaPage implements AfterViewInit{
  @ViewChild('imageCanvas', { static: false }) canvas: any;
  canvasElement: any;

  static puzzle_arr:any = []; 

  static puzzle_size = 3;
  static selected_point_1:any = [];
  static selected_point_2:any = [];
  
  width=this.plt.width();
  height=this.plt.height()-150;
  piece_width:any;
  piece_height:any;
  interval:any;
  puzzle_img_src:any = "../../assets/Img/3.argazkia.jpeg";
  puzzle_img:any;

  constructor(private plt: Platform, private router:Router) {}

  scToGrid(sc_x:any,sc_y:any):any{
    return [Math.floor(sc_x/this.piece_width),Math.floor(sc_y/this.piece_height)];
  }


    //Touch
    getTouchMove(ev:any){
      if(NagelenEskulturaJokuaPage.selected_point_1.length != 0 && ev.touches[0].clientX -ev.target.offsetLeft < this.width-1 && ev.touches[0].clientY-ev.target.offsetParent.offsetTop < this.height-1 && ev.touches[0].clientX -ev.target.offsetLeft > 1 && ev.touches[0].clientY-ev.target.offsetParent.offsetTop> 1){
        NagelenEskulturaJokuaPage.selected_point_2 = this.scToGrid(ev.touches[0].clientX -ev.target.offsetLeft,ev.touches[0].clientY-ev.target.offsetParent.offsetTop);
      }
    }
  
    getTouchStart(ev:any){
      console.log(ev);
      if(ev.touches[0].clientX -ev.target.offsetLeft < this.width-1 && ev.touches[0].clientY-ev.target.offsetParent.offsetTop < this.height-1 && ev.touches[0].clientX -ev.target.offsetLeft > 1 && ev.touches[0].clientY-ev.target.offsetParent.offsetTop> 1){
        NagelenEskulturaJokuaPage.selected_point_1 = this.scToGrid(ev.touches[0].clientX -ev.target.offsetLeft,ev.touches[0].clientY-ev.target.offsetParent.offsetTop);
      }
    }
  
    //Mouse
    getMoved(ev:any){
      if(NagelenEskulturaJokuaPage.selected_point_1.length != 0 && ev.offsetX < this.width-1 && ev.offsetY < this.height-1 && ev.offsetX > 1 && ev.offsetY > 1){
        NagelenEskulturaJokuaPage.selected_point_2 = this.scToGrid(ev.offsetX ,ev.offsetY);
      }
    }
  
    getUnlicked(ev:any){
    }
  
    getClicked(ev:any){
      console.log("Click",ev.offsetY);
      if(ev.offsetX < this.width-1 && ev.offsetY < this.height-1 && ev.offsetX > 1 && ev.offsetY > 1){
        NagelenEskulturaJokuaPage.selected_point_1 = this.scToGrid(ev.offsetX ,ev.offsetY);
      }
    }

     //Resize stuff
    onResize(ev:any){
      this.width = ev.target.innerWidth;
      this.height = ev.target.innerHeight-150;
      this.resize();
    }

    resize(){
      this.canvasElement = this.canvas.nativeElement;
      if (this.width>this.height){
        this.width=this.height;
      }else{
        this.height=this.width;
      }
      this.height -= (this.piece_height % NagelenEskulturaJokuaPage.puzzle_size);
      this.width -= (this.piece_width % NagelenEskulturaJokuaPage.puzzle_size);
      this.canvasElement.height = this.height;
      this.canvasElement.width = this.width;
      //this.resizePuzzle();
     }

     resizePuzzle(){
        this.puzzle_img.width = this.width;
        this.puzzle_img.height = this.height;
        this.piece_width = this.puzzle_img.width/NagelenEskulturaJokuaPage.puzzle_size;
        this.piece_height= this.puzzle_img.height/NagelenEskulturaJokuaPage.puzzle_size;

      for (let x = 0; x < NagelenEskulturaJokuaPage.puzzle_size; x++) {
        for (let y = 0; y < NagelenEskulturaJokuaPage.puzzle_size; y++) {
          if(!NagelenEskulturaJokuaPage.checkPiece(x,y)){
            let piece = NagelenEskulturaJokuaPage.getPiece(x,y);
            piece.width = this.piece_width;
            piece.height = this.piece_height;
            NagelenEskulturaJokuaPage.setPiece(piece);
          }
        }
      }
   }
    
     static setPiece(piece:any){
      let i = piece.y * this.puzzle_size + piece.x;
      this.puzzle_arr[i] = piece;
    }

    static getPiece(x:any,y:any){
      let i = y * this.puzzle_size + x;
      return this.puzzle_arr[i];
    }

    static checkPiece(x:any,y:any):any{
      let i = y * this.puzzle_size + x;
      if(this.puzzle_arr[i] == undefined){
        return true;
      }
    }

      //Start
  ngAfterViewInit() {
    this.puzzle_img = new Image() 
    this.puzzle_img.src = this.puzzle_img_src;
    this.piece_width = this.puzzle_img.width/NagelenEskulturaJokuaPage.puzzle_size;
    this.piece_height= this.puzzle_img.height/NagelenEskulturaJokuaPage.puzzle_size;
    this.resize();
    this.generatePuzzle();
    this.interval = setInterval(this.draw, 10,this.canvasElement,this.canvasElement.getContext('2d'));
  }

  generatePuzzle(){
    var all_xy = [];

    for (let x = 0; x < NagelenEskulturaJokuaPage.puzzle_size; x++) {
      for (let y = 0; y < NagelenEskulturaJokuaPage.puzzle_size; y++) {
        all_xy.push([x,y]);
      }
    }

    for (let x = 0; x < NagelenEskulturaJokuaPage.puzzle_size; x++) {
      for (let y= 0; y < NagelenEskulturaJokuaPage.puzzle_size; y++) {
        let piece =new Piece(x,y,this.piece_width,this.piece_height,this.puzzle_img);
        let xy_index = Math.floor(Math.random() *all_xy.length);
        //piece.x = all_xy[xy_index][0];
        //piece.y = all_xy[xy_index][1];
        piece.x = x;
        piece.y = y;
        all_xy.splice(xy_index,1);
        NagelenEskulturaJokuaPage.setPiece(piece);
      }
    }
    console.log(NagelenEskulturaJokuaPage.puzzle_arr)
  }

    //Game loop draw
    draw(canvasElement:any,ctx:any){
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      for (let x = 0; x < NagelenEskulturaJokuaPage.puzzle_size; x++) {
        for (let y= 0; y < NagelenEskulturaJokuaPage.puzzle_size; y++) {
          if(!NagelenEskulturaJokuaPage.checkPiece(x,y)){
            NagelenEskulturaJokuaPage.getPiece(x,y).draw(ctx);
          }
        }
      }
    }

}

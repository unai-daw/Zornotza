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

  static puzzle_size = 4;
  static selected_point_1:any = [];
  static selected_point_2:any = [];
  static piece_width:any;
  static piece_height:any;
  
  width=this.plt.width();
  height=this.plt.height()-157;

  interval:any;
  puzzle_img_src:any = "../../assets/Img/3.argazkia.jpeg";
  puzzle_img:any;
  real_piece_width:number;
  real_piece_height:number;

  constructor(private plt: Platform, private router:Router) {}

  scToGrid(sc_x:any,sc_y:any):any{
    return [Math.floor(sc_x/NagelenEskulturaJokuaPage.piece_width),Math.floor(sc_y/NagelenEskulturaJokuaPage.piece_height)];
  }

  checkallCorrect():any{
    var allcorrect = true;
    for (let x = 0; x < NagelenEskulturaJokuaPage.puzzle_size; x++) {
      for (let y= 0; y < NagelenEskulturaJokuaPage.puzzle_size; y++) {
        var piece = NagelenEskulturaJokuaPage.getPiece(x,y);
        if(x != piece.x_real || y != piece.y_real){
          allcorrect = false;
        }
      }
    }
    if(allcorrect){
      setTimeout(() => {
        this.navigateTo();
      }, 500);
    }
  }

  swapImages(x1:any,y1:any,x2:any,y2:any){
    var piece1 = NagelenEskulturaJokuaPage.getPiece(x1,y1);
    piece1.x= x2;
    piece1.y = y2;
    var piece2 = NagelenEskulturaJokuaPage.getPiece(x2,y2);
    piece2.x= x1;
    piece2.y = y1;
    NagelenEskulturaJokuaPage.setPiece(piece1);
    NagelenEskulturaJokuaPage.setPiece(piece2);
  }
  
    //Mouse && Touch
    getUnclicked(ev:any){
      if(NagelenEskulturaJokuaPage.selected_point_2.length != 0){
        NagelenEskulturaJokuaPage.selected_point_1 = [];
        NagelenEskulturaJokuaPage.selected_point_2 = [];
      }
    }
  
    getClicked(ev:any){
      if(ev.offsetX < this.width-1 && ev.offsetY < this.height-1 && ev.offsetX > 1 && ev.offsetY > 1){
        if(NagelenEskulturaJokuaPage.selected_point_1.length == 0){
          NagelenEskulturaJokuaPage.selected_point_1 = this.scToGrid(ev.offsetX ,ev.offsetY);
        }else{
          NagelenEskulturaJokuaPage.selected_point_2 = this.scToGrid(ev.offsetX ,ev.offsetY);
          this.swapImages(NagelenEskulturaJokuaPage.selected_point_1[0],NagelenEskulturaJokuaPage.selected_point_1[1],NagelenEskulturaJokuaPage.selected_point_2[0],NagelenEskulturaJokuaPage.selected_point_2[1]);
          this.checkallCorrect();
        }
      }
    }

     //Resize stuff
    onResize(ev:any){
      this.width = ev.target.innerWidth;
      this.height = ev.target.innerHeight-157;
      this.resize();
    }

    resize(){
      this.canvasElement = this.canvas.nativeElement;
      if (this.width>this.height){
        this.width=this.height * this.puzzle_img.width / this.puzzle_img.height;
      }else{
        this.height=this.width * this.puzzle_img.height / this.puzzle_img.width;
      }
      this.canvasElement.width = this.width;
      this.canvasElement.height = this.height;
      this.resizePuzzle();
     }

    resizePuzzle(){
      NagelenEskulturaJokuaPage.piece_width = this.width/NagelenEskulturaJokuaPage.puzzle_size;
      NagelenEskulturaJokuaPage.piece_height= this.height/NagelenEskulturaJokuaPage.puzzle_size;
      for (let x = 0; x < NagelenEskulturaJokuaPage.puzzle_size; x++) {
        for (let y = 0; y < NagelenEskulturaJokuaPage.puzzle_size; y++) {
          if(!NagelenEskulturaJokuaPage.checkPiece(x,y)){
            let piece = NagelenEskulturaJokuaPage.getPiece(x,y);
            piece.width = NagelenEskulturaJokuaPage.piece_width;
            piece.height = NagelenEskulturaJokuaPage.piece_height;
            piece.height_real = this.real_piece_height;
            piece.width_real = this.real_piece_width;
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
      return false;
    }

      //Start
  ngAfterViewInit() {
    this.puzzle_img = new Image() 
    this.puzzle_img.src = this.puzzle_img_src;
    this.puzzle_img.onload = () => {
      this.resize();
      this.generatePuzzle();
      this.interval = setInterval(this.draw, 10,this.canvasElement,this.canvasElement.getContext('2d'));
    }
  }

  generatePuzzle(){
    this.real_piece_width = this.puzzle_img.width/NagelenEskulturaJokuaPage.puzzle_size;
    this.real_piece_height= this.puzzle_img.height/NagelenEskulturaJokuaPage.puzzle_size;
    var all_xy = [];
    for (let x = 0; x < NagelenEskulturaJokuaPage.puzzle_size; x++) {
      for (let y = 0; y < NagelenEskulturaJokuaPage.puzzle_size; y++) {
        all_xy.push([x,y]);
      }
    }

    for (let x = 0; x < NagelenEskulturaJokuaPage.puzzle_size; x++) {
      for (let y= 0; y < NagelenEskulturaJokuaPage.puzzle_size; y++) {
        let xy_index = Math.floor(Math.random() *all_xy.length);
        let piece =new Piece(x,y,all_xy[xy_index][0], all_xy[xy_index][1],this.real_piece_width,this.real_piece_height,NagelenEskulturaJokuaPage.piece_width,NagelenEskulturaJokuaPage.piece_height,this.puzzle_img);
        all_xy.splice(xy_index,1);
        NagelenEskulturaJokuaPage.setPiece(piece);
      }
    }
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
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(NagelenEskulturaJokuaPage.selected_point_1[0]*NagelenEskulturaJokuaPage.piece_width,NagelenEskulturaJokuaPage.selected_point_1[1]* NagelenEskulturaJokuaPage.piece_height, NagelenEskulturaJokuaPage.piece_width, NagelenEskulturaJokuaPage.piece_height);
      ctx.stroke();
    }

    navigateTo(){
      Functions.navigateTo(this.router,"buho-final/nagelen-eskultura-jokua");
    }
}


import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Double } from 'src/classes/double';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-emakumeen-espetxea-jokua',
  templateUrl: './emakumeen-espetxea-jokua.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class EmakumeenEspetxeaJokuaPage implements AfterViewInit {
  @ViewChild('imageCanvas', { static: false }) canvas: any;
  canvasElement: any;

  constructor(private plt: Platform, private router:Router) {}
  url:any = "../../assets/Img/"
  static doubles_arr:any = ["1.elkarmelo.jpeg","2.elkarmelo.jpeg","3.elkarmelo.jpeg","elkarmelo4.png"]; 
  static game_arr:any = [];

  static selected_point_1:any = [];
  static selected_point_2:any = [];
  static image_width:any;
  static image_height:any;
  static doubles_height:any;
  static doubles_width:any = 2;
  static doubles_found_pos:any = [];
  static doubles_found_id:any = [];

  audio_ondo:any;
  audio_txarto:any;
  width=this.plt.width();
  height=this.plt.height()-157;
  interval:any;

  ngAfterViewInit(): void {
    this.audio_ondo = new Audio("../../assets/audio/emakumeen-espetxea-ondo.m4a");
    this.audio_txarto = new Audio("../../assets/audio/emakumeen-espetxea-txarto.m4a");
    this.resize();
    this.generateDoubles();
    this.interval = setInterval(this.draw, 10,this.canvasElement,this.canvasElement.getContext('2d'));
  }

  scToGrid(sc_x:any,sc_y:any):any{
    return [Math.floor(sc_x/EmakumeenEspetxeaJokuaPage.image_width),Math.floor(sc_y/EmakumeenEspetxeaJokuaPage.image_height)];
  }

  checkCorrect(){
    let double1 = EmakumeenEspetxeaJokuaPage.getDouble(EmakumeenEspetxeaJokuaPage.selected_point_1[0],EmakumeenEspetxeaJokuaPage.selected_point_1[1]);
    let double2 = EmakumeenEspetxeaJokuaPage.getDouble(EmakumeenEspetxeaJokuaPage.selected_point_2[0],EmakumeenEspetxeaJokuaPage.selected_point_2[1]);
    
    if(double1.id == double2.id){
      let is_in = false;
      for (let i = 0; i < EmakumeenEspetxeaJokuaPage.doubles_found_id.length; i++) {
        if(double1.id == EmakumeenEspetxeaJokuaPage.doubles_found_id[i]){
          is_in = true;
        }
      }
      if(is_in == false){
        EmakumeenEspetxeaJokuaPage.doubles_found_pos.push([double1.x,double1.y]);
        EmakumeenEspetxeaJokuaPage.doubles_found_pos.push([double2.x,double2.y]);
        EmakumeenEspetxeaJokuaPage.doubles_found_id.push(double1.id);
      }
    }
  }

  checkAllCorrect(){
    if(EmakumeenEspetxeaJokuaPage.doubles_found_id.length == EmakumeenEspetxeaJokuaPage.doubles_arr.length){
      setTimeout(() => {
        this.navigateTo();
      }, 500);
    }
  }

  //Mouse && Touch
  getUnclicked(ev:any){
    if(EmakumeenEspetxeaJokuaPage.selected_point_2.length != 0){
      setTimeout(() => {
        EmakumeenEspetxeaJokuaPage.selected_point_1 = [];
        EmakumeenEspetxeaJokuaPage.selected_point_2 = [];
      }, 300);
    }
  }
    
  getClicked(ev:any){
    if(ev.offsetX < this.width-1 && ev.offsetY < this.height-1 && ev.offsetX > 1 && ev.offsetY > 1){
      if(EmakumeenEspetxeaJokuaPage.selected_point_1.length == 0){
        EmakumeenEspetxeaJokuaPage.selected_point_1 = this.scToGrid(ev.offsetX ,ev.offsetY);
      }else{
        EmakumeenEspetxeaJokuaPage.selected_point_2 = this.scToGrid(ev.offsetX ,ev.offsetY);
        this.checkCorrect();
        this.checkAllCorrect();
      }
    }
    console.log(EmakumeenEspetxeaJokuaPage.doubles_found_id);
  }

  static setDouble(piece:any){
    let i = piece.y * this.doubles_width + piece.x;
    this.game_arr[i] = piece;
  }

  static getDouble(x:any,y:any){
    let i = y * this.doubles_width + x;
    return this.game_arr[i];
  }

  static checkDouble(x:any,y:any):any{
    let i = y * this.doubles_width + x;
    if(this.game_arr[i] == undefined){
      return true;
    }
    return false;
  }

  onResize(ev:any){
    this.width = ev.target.innerWidth;
    this.height = ev.target.innerHeight-157;
    this.resize();
  }

  resize(){
    this.canvasElement = this.canvas.nativeElement;
    if (this.width>this.height){
      this.width=this.height;
    }else{
      this.height=this.width;
    }
    this.canvasElement.height = this.height;
    this.canvasElement.width = this.width;
    this.resizeDoubles();
  }

  resizeDoubles(){
    EmakumeenEspetxeaJokuaPage.doubles_height = EmakumeenEspetxeaJokuaPage.doubles_arr.length;
    EmakumeenEspetxeaJokuaPage.image_height = this.height/EmakumeenEspetxeaJokuaPage.doubles_height;
    EmakumeenEspetxeaJokuaPage.image_width = this.width/EmakumeenEspetxeaJokuaPage.doubles_width;
    for (let x = 0; x < EmakumeenEspetxeaJokuaPage.doubles_width; x++) {
      for (let y = 0; y < EmakumeenEspetxeaJokuaPage.doubles_height; y++) {
        if(!EmakumeenEspetxeaJokuaPage.checkDouble(x,y)){
          let piece = EmakumeenEspetxeaJokuaPage.getDouble(x,y);
          piece.width = EmakumeenEspetxeaJokuaPage.image_width;
          piece.height = EmakumeenEspetxeaJokuaPage.image_height;
          EmakumeenEspetxeaJokuaPage.setDouble(piece);
        }
      }
    }
 }

  generateDoubles(){
    var all_ids = [];
    for (let i = 0; i < EmakumeenEspetxeaJokuaPage.doubles_height ; i++) {
      for (let k = 0; k < 2; k++) {
        all_ids.push(this.url + EmakumeenEspetxeaJokuaPage.doubles_arr[i]);
      }
    }
    var all_xy = [];
    for (let x = 0; x < EmakumeenEspetxeaJokuaPage.doubles_width; x++) {
      for (let y = 0; y < EmakumeenEspetxeaJokuaPage.doubles_height; y++) {
        all_xy.push([x,y]);
    }
    }

    for (let x = 0; x < EmakumeenEspetxeaJokuaPage.doubles_width; x++) {
      for (let y = 0; y < EmakumeenEspetxeaJokuaPage.doubles_height; y++) {
        let xy_index = Math.floor(Math.random() *all_xy.length);
        let ids_index = Math.floor(Math.random() *all_ids.length);
        let img = new Image();
        img.src = all_ids[ids_index];
        let double = new Double(all_xy[xy_index][0],all_xy[xy_index][1],EmakumeenEspetxeaJokuaPage.image_width,EmakumeenEspetxeaJokuaPage.image_height,img);
        double.id = all_ids[ids_index];
        EmakumeenEspetxeaJokuaPage.setDouble(double);
        all_xy.splice(xy_index,1);
        all_ids.splice(ids_index,1);
        
      }
    }
    
  }

  draw(canvasElement:any,ctx:any){
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    for (let x = 0; x < EmakumeenEspetxeaJokuaPage.doubles_width; x++) {
      for (let y= 0; y < EmakumeenEspetxeaJokuaPage.doubles_height; y++) {
        if(!EmakumeenEspetxeaJokuaPage.checkDouble(x,y)){
          EmakumeenEspetxeaJokuaPage.getDouble(x,y).draw(ctx);
        }
        let is_in = false;
        for (let i = 0; i < EmakumeenEspetxeaJokuaPage.doubles_found_pos.length; i++) {
          if(EmakumeenEspetxeaJokuaPage.doubles_found_pos[i][0] == x && EmakumeenEspetxeaJokuaPage.doubles_found_pos[i][1] == y){
            is_in = true;
          }
        }
        if((EmakumeenEspetxeaJokuaPage.selected_point_1[0] == x && EmakumeenEspetxeaJokuaPage.selected_point_1[1] == y) || (EmakumeenEspetxeaJokuaPage.selected_point_2[0] == x && EmakumeenEspetxeaJokuaPage.selected_point_2[1] == y)){
          is_in = true;
        }

        if(!is_in){
          ctx.fillStyle = "rgba(52, 137, 235,1)";
          ctx.fillRect(x*EmakumeenEspetxeaJokuaPage.image_width, y*EmakumeenEspetxeaJokuaPage.image_height,EmakumeenEspetxeaJokuaPage.image_width,EmakumeenEspetxeaJokuaPage.image_height);
          
          ctx.beginPath();
          ctx.strokeStyle = "rgba(50, 45, 181,1)";
          ctx.lineWidth = "5";
          ctx.rect(x*EmakumeenEspetxeaJokuaPage.image_width, y*EmakumeenEspetxeaJokuaPage.image_height,EmakumeenEspetxeaJokuaPage.image_width,EmakumeenEspetxeaJokuaPage.image_height)
          ctx.stroke();
        }
      }
    }
  }
  
  navigateTo(){
    Functions.navigateTo(this.router,"buho-final/emakumeen-espetxea-jokua");
  }
}

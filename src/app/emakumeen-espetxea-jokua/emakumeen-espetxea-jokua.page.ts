import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

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
  static doubles_arr:any = ["1.karmelo.jpeg","2.karmelo.jpeg","3.karmelo.jpeg","4.karmelo.jpeg"]; 

  static selected_point_1:any = [];
  static selected_point_2:any = [];
  static image_width:any;
  static image_height:any;
  
  width=this.plt.width();
  height=this.plt.height()-157;
  interval:any;

  ngAfterViewInit(): void {
    this.resize();
  }

  scToGrid(sc_x:any,sc_y:any):any{
    return [Math.floor(sc_x/EmakumeenEspetxeaJokuaPage.image_width),Math.floor(sc_y/EmakumeenEspetxeaJokuaPage.image_height)];
  }

  //Mouse && Touch
  getUnclicked(ev:any){
  }
    
  getClicked(ev:any){
    if(ev.offsetX < this.width-1 && ev.offsetY < this.height-1 && ev.offsetX > 1 && ev.offsetY > 1){

    }
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
    //this.resizePuzzle();
  }
}

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Tile} from '../../classes/tile'

@Component({
  selector: 'app-andres-espinosa-jokua',
  templateUrl: './andres-espinosa-jokua.page.html',
  styleUrls: ['../../assets/style.css'],

})
export class AndresEspinosaJokuaPage implements AfterViewInit {
  @ViewChild('imageCanvas', { static: false }) canvas: any;
  canvasElement: any;

  static soup_arr:any = []; 

  static soup_size = 15;
  static selected_point_1:any = [];
  static selected_point_2:any = [];
  static slected_word:any =[];
  static found_words_pos:any=[];
  
  found_words:any=[];
  width=this.plt.width();
  height=this.plt.height()-150;
  soup_words:any = ["lander","iker","xabier","izaskun","lopez","hegoi"];
  cell_size:any;
  interval:any;

  constructor(private plt: Platform) {}

  scToGrid(sc_x:any,sc_y:any):any{
    return [Math.floor(sc_x/this.cell_size),Math.floor(sc_y/this.cell_size)];
  }

  aimAssistSelection(){
    AndresEspinosaJokuaPage.slected_word = [];
    let aim_assist_points = [];
    let nearest_point =[];

    //All posible 8 points calculation
    let d = Math.sqrt(Math.pow(AndresEspinosaJokuaPage.selected_point_1[0]- AndresEspinosaJokuaPage.selected_point_2[0],2)+Math.pow(AndresEspinosaJokuaPage.selected_point_1[1] - AndresEspinosaJokuaPage.selected_point_2[1],2));
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        let d2 = 0;
        let x2= AndresEspinosaJokuaPage.selected_point_1[0];
        let y2= AndresEspinosaJokuaPage.selected_point_1[1];
        if(!(y == 0 && x==0)){
          while(d2 < d){
            x2+=x;
            y2+=y;
            d2 = Math.sqrt(Math.pow(AndresEspinosaJokuaPage.selected_point_1[0] - x2,2)+Math.pow(AndresEspinosaJokuaPage.selected_point_1[1] - y2,2));
          }
        }
        aim_assist_points.push(x2);
        aim_assist_points.push(y2)
      }
    }

    //Neatest one
    let tmp = Infinity;
    for (let i = 0; i <aim_assist_points.length; i+=2) {
      let d3 = Math.sqrt(Math.pow(aim_assist_points[i] - AndresEspinosaJokuaPage.selected_point_2[0],2)+Math.pow(aim_assist_points[i+1] - AndresEspinosaJokuaPage.selected_point_2[1],2));
      if(d3 < tmp){
        tmp = d3;
        nearest_point[0] = aim_assist_points[i];
        nearest_point[1] = aim_assist_points[i+1];
      }
    }

    let dx =nearest_point[0] - AndresEspinosaJokuaPage.selected_point_1[0];
    let dy =nearest_point[1] - AndresEspinosaJokuaPage.selected_point_1[1];
    d=Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
    if(d > 0){
      dx = Math.round(dx/d);
      dy = Math.round(dy/d);
    }
    let x3 = AndresEspinosaJokuaPage.selected_point_1[0];
    let y3 = AndresEspinosaJokuaPage.selected_point_1[1];
    AndresEspinosaJokuaPage.slected_word.push(x3);
    AndresEspinosaJokuaPage.slected_word.push(y3);
    while(d > 0){
      x3+=dx;
      y3+=dy;
      AndresEspinosaJokuaPage.slected_word.push(x3);
      AndresEspinosaJokuaPage.slected_word.push(y3);
      d = Math.sqrt(Math.pow(x3-nearest_point[0],2)+Math.pow(y3-nearest_point[1],2));
    }
  }

  checkWord(){
    let word = "";
    for (let i = 0; i < AndresEspinosaJokuaPage.slected_word.length; i+=2) {
      if(!AndresEspinosaJokuaPage.checkTile(AndresEspinosaJokuaPage.slected_word[i],AndresEspinosaJokuaPage.slected_word[i+1])){
      word += AndresEspinosaJokuaPage.getTile(AndresEspinosaJokuaPage.slected_word[i],AndresEspinosaJokuaPage.slected_word[i+1]).letter;
      }
    }
    for (let i = 0; i < this.soup_words.length; i++) {
      if(word == this.soup_words[i]){
        let already = false;
        for (let w = 0; w < this.found_words.length; w++) {
          if(word == this.found_words[w]){
            already = true;
          }
        }
        if(!already){
          this.found_words.push(word);
          for (let k = 0; k < AndresEspinosaJokuaPage.slected_word.length; k++) {
            AndresEspinosaJokuaPage.found_words_pos.push(AndresEspinosaJokuaPage.slected_word[k])
          }
          break;
        }
      }
    }
  }

  checkWordsFound(){
    if(this.found_words.length == this.soup_words.length){

    }
  }

  //Touch
  getTouchMove(ev:any){
    if(AndresEspinosaJokuaPage.selected_point_1.length != 0 && ev.touches[0].clientX -ev.target.offsetLeft < this.width-1 && ev.touches[0].clientY-ev.target.offsetParent.offsetTop < this.height-1 && ev.touches[0].clientX -ev.target.offsetLeft > 1 && ev.touches[0].clientY-ev.target.offsetParent.offsetTop> 1){
      AndresEspinosaJokuaPage.selected_point_2 = this.scToGrid(ev.touches[0].clientX -ev.target.offsetLeft,ev.touches[0].clientY-ev.target.offsetParent.offsetTop);
      this.aimAssistSelection();
    }
  }

  getTouchStart(ev:any){
    console.log(ev);
    if(ev.touches[0].clientX -ev.target.offsetLeft < this.width-1 && ev.touches[0].clientY-ev.target.offsetParent.offsetTop < this.height-1 && ev.touches[0].clientX -ev.target.offsetLeft > 1 && ev.touches[0].clientY-ev.target.offsetParent.offsetTop> 1){
      AndresEspinosaJokuaPage.selected_point_1 = this.scToGrid(ev.touches[0].clientX -ev.target.offsetLeft,ev.touches[0].clientY-ev.target.offsetParent.offsetTop);
    }
  }

  //Mouse
  getMoved(ev:any){
    if(AndresEspinosaJokuaPage.selected_point_1.length != 0 && ev.offsetX < this.width-1 && ev.offsetY < this.height-1 && ev.offsetX > 1 && ev.offsetY > 1){
      AndresEspinosaJokuaPage.selected_point_2 = this.scToGrid(ev.offsetX ,ev.offsetY);
      this.aimAssistSelection();
    }
  }

  getUnlicked(ev:any){
    AndresEspinosaJokuaPage.selected_point_1 = [];
    AndresEspinosaJokuaPage.selected_point_2 = [];
    this.checkWord();
    AndresEspinosaJokuaPage.slected_word = [];
    this.checkWordsFound();
  }

  getClicked(ev:any){
    console.log("Click",ev.offsetY);
    if(ev.offsetX < this.width-1 && ev.offsetY < this.height-1 && ev.offsetX > 1 && ev.offsetY > 1){
      AndresEspinosaJokuaPage.selected_point_1 = this.scToGrid(ev.offsetX ,ev.offsetY);
    }
  }

  //Tile Stuff
  static setTile(tile:any){
    let i = tile.y * this.soup_size + tile.x;
    this.soup_arr[i] = tile;
  }

  static getTile(x:any,y:any){
    let i = y * this.soup_size + x;
    return this.soup_arr[i];
  }

  static checkTile(x:any,y:any,char:any = null){
   let i = y * this.soup_size + x;

   if(y >= this.soup_size || x >= this.soup_size || y < 0 || x < 0){
      return true;
   }

  if(char == null){
    if(this.soup_arr[i] == undefined){
      return true;
    }
  }else if(this.soup_arr[i] != undefined){
    if(this.soup_arr[i].letter != char){
      return true;
    }
  }

    return false;
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
  this.height -= (this.height % AndresEspinosaJokuaPage.soup_size);
  this.width -= (this.width % AndresEspinosaJokuaPage.soup_size);
  this.canvasElement.height = this.height;
  this.canvasElement.width = this.width;
  this.resizeSoup();
 }

 resizeSoup(){
    this.cell_size = this.width/AndresEspinosaJokuaPage.soup_size;
    for (let x = 0; x < AndresEspinosaJokuaPage.soup_size; x++) {
      for (let y = 0; y < AndresEspinosaJokuaPage.soup_size; y++) {
        if(!AndresEspinosaJokuaPage.checkTile(x,y)){
          let xd = AndresEspinosaJokuaPage.getTile(x,y);
          xd.size = this.cell_size;
          xd.letter_size = this.cell_size* xd.size_factor;
          AndresEspinosaJokuaPage.setTile(xd);
        }
      }
    }
 }
  //Soup generation
  getRandChar(){
    let chars:any =['a','b','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','x','z'];
    return chars[Math.floor(Math.random()*chars.length)];
  }

  generateSoup(){
    for (let i = 0; i < this.soup_words.length; i++) {
      let chars = this.soup_words[i].split('');
      let allok = true;
      let x = 0;
      let y = 0;
      let x_dir = 0;
      let y_dir = 0;
      
      while(allok){
        let correct = true;
        x_dir = Math.round(Math.random());

        if(x_dir == 0){
          y_dir = 1;
        }else{
          y_dir = Math.round(Math.random()*2)-1;
        }

        x = Math.floor((Math.random() * AndresEspinosaJokuaPage.soup_size));
        y = Math.floor((Math.random() * AndresEspinosaJokuaPage.soup_size));
        
        for (let k = 0; k < chars.length; k++) {
          if(AndresEspinosaJokuaPage.checkTile(x+(k*x_dir),y+(k*y_dir),chars[k])){
            correct = false;
            break;
          }
        }
        if(correct){
          allok = false;
        }
      }
      //let red = Math.floor(Math.random() * 255);
      //let green = Math.floor(Math.random() * 255);
      //let blue = Math.floor(Math.random() * 255);
      for (let k = 0; k < chars.length; k++) {
        AndresEspinosaJokuaPage.setTile(new Tile(x+(k*x_dir),y+(k*y_dir),this.width/AndresEspinosaJokuaPage.soup_size,chars[k],"rgba(" + 255 +","+ 255 +"," + 255 + ",1)"));
      }
    }

    for (let x = 0; x < AndresEspinosaJokuaPage.soup_size; x++) {
      for (let y = 0; y < AndresEspinosaJokuaPage.soup_size; y++) {
        if(AndresEspinosaJokuaPage.checkTile(x,y)){
          AndresEspinosaJokuaPage.setTile(new Tile(x,y,this.width/AndresEspinosaJokuaPage.soup_size,this.getRandChar()));
        }
      }
    }
  }

  //Start
  ngAfterViewInit() {
    this.resize();
    this.generateSoup();
    this.interval = setInterval(this.draw, 10,this.canvasElement,this.canvasElement.getContext('2d'));
  }

  //Game loop draw
  draw(canvasElement:any,ctx:any){
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    for (let x = 0; x < AndresEspinosaJokuaPage.soup_size; x++) {
      for (let y = 0; y < AndresEspinosaJokuaPage.soup_size; y++) {
        if(!AndresEspinosaJokuaPage.checkTile(x,y)){
          AndresEspinosaJokuaPage.getTile(x,y).draw(ctx);
          AndresEspinosaJokuaPage.getTile(x,y).bg_color = "rgba(255,255,255,1)"
        }
      }
    }

    for (let i = 0; i < AndresEspinosaJokuaPage.found_words_pos.length; i+= 2) {
      if(!AndresEspinosaJokuaPage.checkTile(AndresEspinosaJokuaPage.found_words_pos[i],AndresEspinosaJokuaPage.found_words_pos[i+1])){
        AndresEspinosaJokuaPage.getTile(AndresEspinosaJokuaPage.found_words_pos[i],AndresEspinosaJokuaPage.found_words_pos[i+1]).bg_color = "rgba(0,255,0,0.7)"
      }
    }

    for (let i = 0; i < AndresEspinosaJokuaPage.slected_word.length; i+= 2) {
      if(!AndresEspinosaJokuaPage.checkTile(AndresEspinosaJokuaPage.slected_word[i],AndresEspinosaJokuaPage.slected_word[i+1])){
        AndresEspinosaJokuaPage.getTile(AndresEspinosaJokuaPage.slected_word[i],AndresEspinosaJokuaPage.slected_word[i+1]).bg_color = "rgba(0,0,255,0.5)"
      }
    }

    if(AndresEspinosaJokuaPage.selected_point_1.length != 0){
      AndresEspinosaJokuaPage.getTile(AndresEspinosaJokuaPage.selected_point_1[0],AndresEspinosaJokuaPage.selected_point_1[1]).bg_color = "rgba(0,0,255,1)"
    }

    if(AndresEspinosaJokuaPage.selected_point_2.length != 0){
      AndresEspinosaJokuaPage.getTile(AndresEspinosaJokuaPage.selected_point_2[0],AndresEspinosaJokuaPage.selected_point_2[1]).bg_color = "rgba(0,0,255,1)"
    }
  }

}

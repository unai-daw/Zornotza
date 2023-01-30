import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { videoOverlay } from 'leaflet';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-nagelen-eskultura-azalpena',
  templateUrl: './nagelen-eskultura-azalpena.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class NagelenEskulturaAzalpenaPage implements ViewWillEnter, ViewWillLeave,ViewDidEnter {
  static video:any;
  static interval:any;

  constructor(private router:Router) { }
  ionViewWillEnter(): void {
    NagelenEskulturaAzalpenaPage.video = document.getElementById("videoplayer");
    NagelenEskulturaAzalpenaPage.video.play();
  }

  ionViewDidEnter(): void {
    NagelenEskulturaAzalpenaPage.interval = setInterval(this.checkVideo,10,this.router);
  }

  ionViewWillLeave(): void {
    NagelenEskulturaAzalpenaPage.video.pause();
    NagelenEskulturaAzalpenaPage.video.currentTime = 0;
    clearInterval(NagelenEskulturaAzalpenaPage.interval);
  }

  checkVideo(router:any){
    if(NagelenEskulturaAzalpenaPage.video.paused){
      
      Functions.navigateTo(router, "nagelen-eskultura-jokua");
    }
  }
}

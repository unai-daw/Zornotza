import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-lara-izaguirre-jokua',
  templateUrl: './lara-izaguirre-jokua.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class LaraIzaguirreJokuaPage implements ViewWillEnter, ViewWillLeave,ViewDidEnter {
  static video:any;
  static interval:any;


  constructor(private router:Router) { }
  ionViewWillEnter(): void {
    LaraIzaguirreJokuaPage.video = document.getElementById("videoplayer");
    LaraIzaguirreJokuaPage.video.play();
  }

  ionViewDidEnter(): void {
    LaraIzaguirreJokuaPage.interval = setInterval(this.checkVideo,10,this.router);
  }

  ionViewWillLeave(): void {
    LaraIzaguirreJokuaPage.video.pause();
    LaraIzaguirreJokuaPage.video.currentTime = 0;
    clearInterval(LaraIzaguirreJokuaPage.interval);
  }

  checkVideo(router:any){
    if(LaraIzaguirreJokuaPage.video.paused){
      Functions.navigateTo(router, "lara-izaguirre-jokua2");
    }
  }

}

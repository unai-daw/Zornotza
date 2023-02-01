import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-buho-final',
  templateUrl: './buho-final.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class BuhoFinalPage implements ViewWillEnter,ViewWillLeave,ViewDidEnter {

  constructor(private route: ActivatedRoute,private  router: Router) {}

  static text:any;
  title:any;
  static audio:any;
  static interval:any;
  button_control:any = "disabled";

  ionViewWillEnter(): void {
    BuhoFinalPage.text = String(this.route.snapshot.paramMap.get('text'));
    this.title = BuhoFinalPage.text.replaceAll("-", " ").toUpperCase();

    BuhoFinalPage.audio = new Audio("../../assets/audio/"+ BuhoFinalPage.text + ".m4a");
    BuhoFinalPage.audio.play();
  }

  ionViewDidEnter(): void {
    BuhoFinalPage.interval = setInterval(this.checkAudio,10,this.router);
  }

  ionViewWillLeave(): void {
    BuhoFinalPage.audio.pause();
    BuhoFinalPage.audio.currentTime = 0;
    clearInterval(BuhoFinalPage.interval);
  }

  checkAudio(router:any){
    if(BuhoFinalPage.audio.paused){
      Functions.navigateTo(router, "tabs/mapa");
    }
  }

}

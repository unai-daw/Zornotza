import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ViewDidEnter, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { interval } from 'rxjs';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-buho-principal',
  templateUrl: './buho-principal.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class BuhoPrincipalPage implements ViewWillEnter,ViewWillLeave,ViewDidEnter {

  constructor(private route: ActivatedRoute,private  router: Router) {}

  static text:any;
  title:any;
  static audio:any;
  static interval:any;
  button_control:any = "disabled";

  ionViewWillEnter(): void {
    BuhoPrincipalPage.text = String(this.route.snapshot.paramMap.get('text'));

    this.title = BuhoPrincipalPage.text.replaceAll("-", " ").toUpperCase();

    BuhoPrincipalPage.audio = new Audio("../../assets/audio/"+ BuhoPrincipalPage.text + ".m4a");
    BuhoPrincipalPage.audio.play();
  }

  ionViewDidEnter(): void {
    BuhoPrincipalPage.interval = setInterval(this.checkAudio,10,this.router);
  }

  ionViewWillLeave(): void {
    BuhoPrincipalPage.audio.pause();
    BuhoPrincipalPage.audio.currentTime = 0;
    clearInterval(BuhoPrincipalPage.interval);
  }

  checkAudio(router:any){
    if(BuhoPrincipalPage.audio.paused){
      Functions.navigateTo(router, BuhoPrincipalPage.text + '-azalpena');
    }
  }
}

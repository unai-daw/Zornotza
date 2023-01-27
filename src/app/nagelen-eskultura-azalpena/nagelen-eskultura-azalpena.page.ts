import { Component, OnInit } from '@angular/core';
import { ViewWillLeave } from '@ionic/angular';

@Component({
  selector: 'app-nagelen-eskultura-azalpena',
  templateUrl: './nagelen-eskultura-azalpena.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class NagelenEskulturaAzalpenaPage implements OnInit, ViewWillLeave {

  constructor() { }
  ngOnInit() {
    console.log(document.getElementById("videoplayer"));
  }

  ionViewWillLeave(): void {
 
  }

}

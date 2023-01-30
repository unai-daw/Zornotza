import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillLeave } from '@ionic/angular';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-nagelen-eskultura-azalpena',
  templateUrl: './nagelen-eskultura-azalpena.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class NagelenEskulturaAzalpenaPage implements OnInit, ViewWillLeave {

  constructor(private router:Router) { }
  ngOnInit() {
    console.log(document.getElementById("videoplayer"));
  }

  ionViewWillLeave(): void {
 
  }

  navigateTo(){
    Functions.navigateTo(this.router,"nagelen-eskultura-jokua")
  }
}

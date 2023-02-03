import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-udabarri-dantza-taldea-azalpena',
  templateUrl: './udabarri-dantza-taldea-azalpena.page.html',
  styleUrls: ['../../assets/style.css','../../assets/scss/style2.css'],
})
export class UdabarriDantzaTaldeaAzalpenaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateTo(){
  Functions.navigateTo(this.router,"udabarri-dantza-taldea-jokua")
  }

}

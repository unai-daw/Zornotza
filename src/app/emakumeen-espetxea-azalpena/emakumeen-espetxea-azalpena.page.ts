import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-emakumeen-espetxea-azalpena',
  templateUrl: './emakumeen-espetxea-azalpena.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class EmakumeenEspetxeaAzalpenaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  navigateTo(){
    Functions.navigateTo(this.router,"udabarri-dantza-taldea-jokua")
    }
}

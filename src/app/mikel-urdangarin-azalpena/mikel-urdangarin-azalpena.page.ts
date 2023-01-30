import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-mikel-urdangarin-azalpena',
  templateUrl: './mikel-urdangarin-azalpena.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class MikelUrdangarinAzalpenaPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  navigateTo(){
    Functions.navigateTo(this.router,"mikel-urdangarin-jokua")
    }
  
}

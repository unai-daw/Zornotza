import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-andres-espinosa-azalpena',
  templateUrl: './andres-espinosa-azalpena.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class AndresEspinosaAzalpenaPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navigateTo(){
    Functions.navigateTo(this.router,"andres-espinosa-jokua")
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-andres-espinosa-azalpena',
  templateUrl: './andres-espinosa-azalpena.page.html',
  styleUrls: ['../../assets/style.css','../../assets/scss/style2.css'],
})
export class AndresEspinosaAzalpenaPage{

  constructor(private router : Router) { }

  navigateTo(){
    Functions.navigateTo(this.router,"andres-espinosa-jokua")
    }
}

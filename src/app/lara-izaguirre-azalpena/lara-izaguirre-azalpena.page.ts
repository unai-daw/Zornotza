import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-lara-izaguirre-azalpena',
  templateUrl: './lara-izaguirre-azalpena.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class LaraIzaguirreAzalpenaPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  navigateTo(){
    Functions.navigateTo(this.router,"lara-izaguire-jokua")
    }
}

import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-haizetara-azalpena',
  templateUrl: './haizetara-azalpena.page.html',
  styleUrls: ['../../assets/style.css','../../assets/scss/style2.css'],
})
export class HaizetaraAzalpenaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(){
    Functions.navigateTo(this.router,"haizetara-jokua")
    }

}

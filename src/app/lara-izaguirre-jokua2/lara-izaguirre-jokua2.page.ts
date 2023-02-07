import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-lara-izaguirre-jokua2',
  templateUrl: './lara-izaguirre-jokua2.page.html',
  styleUrls: ['../../assets/style.css','../../assets/scss/style2.css'],
})
export class LaraIzaguirreJokua2Page implements OnInit {

  constructor(private router:Router) { }
  static audio:any;

  ngOnInit() {
  }

  navigateTo(){
    Functions.navigateTo(this.router,"buho-final/lara-izaguirre-jokua");
  }

}

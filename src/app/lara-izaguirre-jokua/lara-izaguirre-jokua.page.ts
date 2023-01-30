import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-lara-izaguirre-jokua',
  templateUrl: './lara-izaguirre-jokua.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class LaraIzaguirreJokuaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateTo(){
    Functions.navigateTo(this.router,"lara-izaguirre-jokua2")
    }

}

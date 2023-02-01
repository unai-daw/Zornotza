import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-haizetara-jokua',
  templateUrl: './haizetara-jokua.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class HaizetaraJokuaPage implements OnInit {

  constructor(private router:Router) { }

  static audio:any;

  ngOnInit() {
  }

  validate() {

    var allCorrect=true;
    var hutsune1= (<HTMLInputElement>document.getElementById("hutsune1"));
    var hutsune2= (<HTMLInputElement>document.getElementById("hutsune2"));
    var hutsune3 = (<HTMLInputElement>document.getElementById("hutsune3"));
    var hutsune4 = (<HTMLInputElement>document.getElementById("hutsune4"));
    var hutsune5 = (<HTMLInputElement>document.getElementById("hutsune5"));
    var hutsune6 = (<HTMLInputElement>document.getElementById("hutsune6"));
    var hutsune7 = (<HTMLInputElement>document.getElementById("hutsune7"));
    
    if(hutsune1.value != "zornotzan"){
      hutsune1.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune1.setAttribute('style','background-color:white');
    }

    if(hutsune2.value != "musika lehiaketa bat"){
      hutsune2.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune2.setAttribute('style','background-color:white');
    }
    
    if(hutsune3.value != "mundu osotik"){
      hutsune3.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune3.setAttribute('style','background-color:white');
    }

    if(hutsune4.value != "udan"){
      hutsune4.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune4.setAttribute('style','background-color:white');
    }

    if(hutsune5.value != "3 egun"){
      hutsune5.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune5.setAttribute('style','background-color:white');
    }

    if(hutsune6.value != "3"){
      hutsune6.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune6.setAttribute('style','background-color:white');
    }

    if(allCorrect==true){
      this.navigateTo();
    }else{
      HaizetaraJokuaPage.audio = new Audio("../../assets/audio/haizetara-jokua-mal.m4a");
      HaizetaraJokuaPage.audio.play();
    }
    
  }

  navigateTo(){
    Functions.navigateTo(this.router,"buho-final/haizetara-jokua");
  }

}

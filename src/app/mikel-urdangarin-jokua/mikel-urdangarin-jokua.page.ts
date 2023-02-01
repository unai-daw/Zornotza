import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-mikel-urdangarin-jokua',
  templateUrl: './mikel-urdangarin-jokua.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class MikelUrdangarinJokuaPage implements OnInit {
  constructor(private router:Router) {}
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
    var hutsune8 = (<HTMLInputElement>document.getElementById("hutsune8"));
    var hutsune9 = (<HTMLInputElement>document.getElementById("hutsune9"));
    var hutsune10 = (<HTMLInputElement>document.getElementById("hutsune10"));
    var hutsune11 = (<HTMLInputElement>document.getElementById("hutsune11"));
    var hutsune12 = (<HTMLInputElement>document.getElementById("hutsune12"));
    
    if(hutsune1.value != "itzultzea"){
      hutsune1.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune1.setAttribute('style','background-color:white');
    }

    if(hutsune2.value != "ederra"){
      hutsune2.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune2.setAttribute('style','background-color:white');
    }
    
    if(hutsune3.value != "izarren"){
      hutsune3.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune3.setAttribute('style','background-color:white');
    }

    if(hutsune4.value != "besoen"){
      hutsune4.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune4.setAttribute('style','background-color:white');
    }

    if(hutsune5.value != "baretzea"){
      hutsune5.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune5.setAttribute('style','background-color:white');
    }

    if(hutsune6.value != "ameztu"){
      hutsune6.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune6.setAttribute('style','background-color:white');
    }

    if(hutsune7.value != "hegoak"){
      hutsune7.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune7.setAttribute('style','background-color:white');
    }

    if(hutsune8.value != "nahi"){
      hutsune8.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune8.setAttribute('style','background-color:white');
    }

    if(hutsune9.value != "dantzatzeko"){
      hutsune9.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune9.setAttribute('style','background-color:white');
    }

    if(hutsune10.value != "fede"){
      hutsune10.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune10.setAttribute('style','background-color:white');
    }

    if(hutsune11.value != "baretzea"){
      hutsune11.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune11.setAttribute('style','background-color:white');
    }

    if(hutsune12.value != "zabalera"){
      hutsune12.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      hutsune12.setAttribute('style','background-color:white');
    }

    if(allCorrect==true){
      this.navigateTo();
    }else{
      MikelUrdangarinJokuaPage.audio = new Audio("../../assets/audio/mikel-urdangarin-jokua-mal.m4a");
      MikelUrdangarinJokuaPage.audio.play();
    }
    
  }

  navigateTo(){
    Functions.navigateTo(this.router,"buho-principal/mikel-urdangarin-jokua");
  }

}
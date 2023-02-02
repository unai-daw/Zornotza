import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functions } from 'src/classes/functions';

@Component({
  selector: 'app-udabarri-dantza-taldea-jokua',
  templateUrl: './udabarri-dantza-taldea-jokua.page.html',
  styleUrls: ['../../assets/style.css','../../assets/scss/style2.css'],
})
export class UdabarriDantzaTaldeaJokuaPage implements OnInit {

  constructor(private router:Router) { }

  static audio:any;

  ngOnInit() {
  }

  validate(){
    var allCorrect=true;
    var galdera1= (<HTMLInputElement>document.getElementById("galdera1"));
    var galdera2= (<HTMLInputElement>document.getElementById("galdera2"));
    var galdera3 = (<HTMLInputElement>document.getElementById("galdera3"));
    var galdera4 = (<HTMLInputElement>document.getElementById("galdera4"));
    var galdera5 = (<HTMLInputElement>document.getElementById("galdera5"));
 

    if(galdera1.value != "egia"){
      galdera1.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      galdera1.setAttribute('style','background-color:white');
    }

    if(galdera2.value != "gezurra"){
      galdera2.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      galdera2.setAttribute('style','background-color:white');
    }
    
    if(galdera3.value != "egia"){
      galdera3.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      galdera3.setAttribute('style','background-color:white');
    }

    if(galdera4.value != "gezurra"){
      galdera4.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      galdera4.setAttribute('style','background-color:white');
    }

    if(galdera5.value != "egia"){
      galdera5.setAttribute('style','background-color:indianred');
      allCorrect=false;
    }else{
      galdera5.setAttribute('style','background-color:white');
    }
    
    if(allCorrect==true){
      this.navigateTo();
    }else{
      UdabarriDantzaTaldeaJokuaPage.audio = new Audio("../../assets/audio/udabarri-dantza-taldea-jokua-mal.m4a");
      UdabarriDantzaTaldeaJokuaPage.audio.play();
    }
    
  }

  navigateTo(){
    Functions.navigateTo(this.router,"buho-final/udabarri-dantza-taldea-jokua");
  }

  

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ViewDidEnter, ViewWillEnter, ViewWillLeave } from '@ionic/angular';  
import * as L from 'leaflet';
import { Functions } from 'src/classes/functions';
import { MapaPageModule } from './mapa.module';

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class MapaPage implements OnInit,ViewWillLeave {

  static song:any;
  static audio:any;

  leafletMap: any;
  lat: number = 43.21829;
  lng: number = - 2.73442;
  zoom: number = 16;

  constructor(private router: Router) {}
  ionViewWillLeave(): void {
    document.getElementById("buho").classList.remove("buho-animation");
    document.getElementById("black_bg").classList.remove("black_bg_animation");
    MapaPage.song.pause();
    MapaPage.song.currentTime = 0;
  }

  loadLeafletMap() {
    this.leafletMap = new L.Map('leafletMap');
    const self = this;

    this.leafletMap.on('load', function () {
      setTimeout(() => {
        self.leafletMap.invalidateSize();
      }, 10);
    });

    this.leafletMap.setView([this.lat, this.lng], this.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.leafletMap);

    let icon = L.icon({
      iconUrl: 'marker-icon.png',
      iconSize: [25, 35],
    
    });

    let marker = L.marker([43.215073740783005,-2.7308718372091714], { icon: icon }).addTo(
      this.leafletMap      
    );
    let marker2 = L.marker([43.22045, -2.73309], { icon: icon }).addTo(
      this.leafletMap      
    );
    let marker3 = L.marker([43.22111,-2.73539], { icon: icon }).addTo(
      this.leafletMap      
    );
    let marker4 = L.marker([43.21983,  -2.7319], { icon: icon }).addTo(
      this.leafletMap      
    );
    let marker5 = L.marker([43.22175, -2.73600], { icon: icon }).addTo(
      this.leafletMap      
    );
    let marker6 = L.marker([43.22131502967737, -2.7312749721080474
    ], { icon: icon }).addTo(
      this.leafletMap      
    );
    let marker7 = L.marker([43.21829,- 2.73442], { icon: icon }).addTo(
      this.leafletMap      
    );

    var content1 = L.DomUtil.create('div','content1'),popup1 = L.popup().setContent(content1);
    content1.innerHTML = "<p style='margin:-10px; font-weight:bold;font-size: 1.5vh; color:#346eeb;'>Andres Espinosa</p>";
    L.DomEvent.addListener(content1, 'click', () => {
      Functions.navigateTo(this.router,'buho-principal/andres-espinosa');
    });

    var content2 = L.DomUtil.create('div','content2'),popup2 = L.popup().setContent(content2);
    content2.innerHTML = "<p style='margin:-10px; font-weight:bold;font-size: 1.5vh; color:#346eeb;'>Nagelen eskultura</p>";
    L.DomEvent.addListener(content2, 'click', () => {
      Functions.navigateTo(this.router,'buho-principal/nagelen-eskultura');
    });

    var content3 = L.DomUtil.create('div','content3'),popup3 = L.popup().setContent(content3);
    content3.innerHTML = "<p style='margin:-10px; font-weight:bold;font-size: 1.5vh; color:#346eeb;'>Mikel Urdangarin</p>";
    L.DomEvent.addListener(content3, 'click', () => {
      Functions.navigateTo(this.router,'buho-principal/mikel-urdangarin');
    });

    var content4 = L.DomUtil.create('div','content4'),popup4 = L.popup().setContent(content4);
    content4.innerHTML = "<p style='margin:-10px; font-weight:bold;font-size: 1.5vh; color:#346eeb;'>Lara Izaguirre</p>";
    L.DomEvent.addListener(content4, 'click', () => {
      Functions.navigateTo(this.router,'buho-principal/lara-izaguirre');
    });

    var content5 = L.DomUtil.create('div','content5'),popup5 = L.popup().setContent(content5);
    content5.innerHTML = "<p style='margin:-10px; font-weight:bold;font-size: 1.5vh; color:#346eeb;'>Udabarri dantza taldea</p>";
    L.DomEvent.addListener(content5, 'click', () => {
      Functions.navigateTo(this.router,'buho-principal/udabarri-dantza-taldea');
    });

    var content6 = L.DomUtil.create('div','content6'),popup6 = L.popup().setContent(content6);
    content6.innerHTML = "<p style='margin:-10px; font-weight:bold;font-size: 1.5vh; color:#346eeb;'>Emakumeen Espetxea</p>";
    L.DomEvent.addListener(content6, 'click', () => {
      Functions.navigateTo(this.router,'buho-principal/emakumeen-espetxea');
    });

    var content7 = L.DomUtil.create('div','content7'),popup7 = L.popup().setContent(content7);
    content7.innerHTML = "<p style='margin:-10px; font-weight:bold;font-size: 1.5vh; color:#346eeb;'>Haizetara</p>";
    L.DomEvent.addListener(content7, 'click', () => {
      Functions.navigateTo(this.router,'buho-principal/haizetara');
    });
  
    marker.bindPopup(popup1);
    marker2.bindPopup(popup2);
    marker3.bindPopup(popup3);
    marker4.bindPopup(popup4);
    marker5.bindPopup(popup5);
    marker6.bindPopup(popup6);
    marker7.bindPopup(popup7);
  }

  ngOnInit(): void {
    this.loadLeafletMap();
    MapaPage.song = new Audio("../../assets/audio/Mapa-cancion.mp3");
    MapaPage.audio = new Audio("../../assets/audio/Mapa-principal.m4a");
    setTimeout(this.startVoice, 3200);
    setTimeout(this.startSong, 1000);
  }

  startSong(){
    MapaPage.song.volume = 0.3;
    MapaPage.song.play()
  }

  startVoice(){
    MapaPage.audio.play();
  }
}

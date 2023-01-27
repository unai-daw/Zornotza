import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ViewDidEnter, ViewWillEnter, ViewWillLeave } from '@ionic/angular';  
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class MapaPage implements OnInit,ViewWillLeave {


  leafletMap: any;
  lat: number = 43.21829;
  lng: number = - 2.73442;
  zoom: number = 16;
  musica:any;

  constructor(private router: Router) {
  }


  ionViewWillLeave(): void {
    document.getElementById("buho").classList.remove("buho-animation");
    document.getElementById("black_bg").classList.remove("black_bg_animation");
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
    content1.innerHTML = "<button>Andres Espinosa</button>";
    L.DomEvent.addListener(content1, 'click', () => {
      this.navigateTo('andres-espinosa');
    });

    var content2 = L.DomUtil.create('div','content2'),popup2 = L.popup().setContent(content2);
    content2.innerHTML = "<button>Nagelen eskultura</button>";
    L.DomEvent.addListener(content2, 'click', () => {
      this.navigateTo('nagelen-eskultura');
    });

    var content3 = L.DomUtil.create('div','content3'),popup3 = L.popup().setContent(content2);
    content3.innerHTML = "<button>Mikel Urdangarin</button>";
    L.DomEvent.addListener(content3, 'click', () => {
      this.navigateTo('mikel-urdangarin');
    });

    var content4 = L.DomUtil.create('div','content4'),popup4 = L.popup().setContent(content4);
    content4.innerHTML = "<button>Lara Izaguirre</button>";
    L.DomEvent.addListener(content4, 'click', () => {
      this.navigateTo('lara-izaguirre');
    });

    var content5 = L.DomUtil.create('div','content5'),popup5 = L.popup().setContent(content5);
    content5.innerHTML = "<button>Udabarri dantza taldea</button>";
    L.DomEvent.addListener(content5, 'click', () => {
      this.navigateTo('udabarri-dantza-taldea');
    });

    var content6 = L.DomUtil.create('div','content6'),popup6 = L.popup().setContent(content6);
    content6.innerHTML = "<button>Emakumeen Espetxea</button>";
    L.DomEvent.addListener(content6, 'click', () => {
      this.navigateTo('emakumeen-espetxea');
    });

    var content7 = L.DomUtil.create('div','content7'),popup7 = L.popup().setContent(content7);
    content7.innerHTML = "<button>Haizetara</button>";
    L.DomEvent.addListener(content7, 'click', () => {
      this.navigateTo('haizetara');
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

  }

  navigateTo(link:string){
    this.router.navigateByUrl("/tabs/buho-principal/" + link);
  }
}

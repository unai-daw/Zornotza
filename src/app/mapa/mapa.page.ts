import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';  
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['../../assets/style.css'],
})
export class MapaPage implements OnInit {
  leafletMap: any;
  lat: number = 43.21829;
  lng: number = - 2.73442;
  
  zoom: number = 16;

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


    let popup = L.popup().setContent('<a href="../tabs/buho-principal/andres-espinosa">Andres Espinosa</a>');
    let popup2 = L.popup().setContent('<a href="../tabs/buho-principal/nagelen-eskultura">Nagelen eskultura</a>');
    let popup3 = L.popup().setContent('<a href="../tabs/buho-principal/mikel-urdangarin">Mikel Urdangarin</a>');
    let popup4 = L.popup().setContent('<a href="../tabs/buho-principal/lara-izaguirre">Lara Izaguirre</a>');
    let popup5 = L.popup().setContent('<a href="../tabs/buho-principal/udabarri-dantza-taldea">Udabarri dantza taldea</a>');
    let popup6 = L.popup().setContent('<a href="../tabs/buho-principal/emakumeen-espetxea">Emakumeen Espetxea</a>');
    let popup7 = L.popup().setContent('<a href="../tabs/buho-principal/haizetara">Haizetara</a>');

    marker.bindPopup(popup);
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

  

}

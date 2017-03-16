import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

import { PlacesService } from './../../services/places.service';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html'
})

export class NewPlacePage {

  constructor(private placesService: PlacesService,
              private navCtrl: NavController) {}

  onAddPlace(value: {title: string}) {
    this.placesService.addPlace(value);
    this.navCtrl.pop();
  }

  onLocateUser() {
    Geolocation.getCurrentPosition().then((location) => {
      
    }).catch((error) => {
      console.log('Erro ao receber localização: ', error);
    })
  }

}

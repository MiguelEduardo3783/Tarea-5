import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alert(){
    window.alert("Hola Profe, ponganos 100 porfa, lo queremos:)");
  }

  constructor() {}

}

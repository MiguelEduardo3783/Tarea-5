import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {

  constructor() { }

  personajes = [
    {
      nombre: "joker",
      imagen: "assets/Joker-SSBU.png"
    },
    {
      nombre: "bayonetta",
      imagen: "assets/main9.webp"
    },
    {
      nombre: "cloud",
      imagen: "assets/Cloud_SSBU.png"
    },
    {
      nombre: "canela",
      imagen: "assets/Canela-SSBU.png"
    },
    {
      nombre: "mega-man",
      imagen: "assets/Mega_Man_SSBU.png"
    }
  ]

  ngOnInit() {
  }

  Sonido()
  {
      let Sound=new Audio();
      Sound.src="assets/SSBU_S.mp3";
      Sound.load();
      Sound.play();
  }

}

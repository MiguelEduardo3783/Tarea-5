import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor() { }

  personajes = [
    {
      nombre: "meta-knight",
      imagen: "assets/3796.png"
    },
    {
      nombre: "snake",
      imagen: "assets/Snake_Clear_SSBB.png"
    },
    {
      nombre: "king-dedede",
      imagen: "assets/kindpng_1565575.png"
    },
    {
      nombre: "toon-link",
      imagen: "assets/PngItem_18978.png"
    },
    {
      nombre: "ice-climbers",
      imagen: "assets/kisspng-super-smash-bros-brawl-super-smash-bros-melee-su-5b2e9e77de3892.7536015415297818799102.png"
    }
  ]

  ngOnInit() {
  }

  Sonido()
  {
      let Sound=new Audio();
      Sound.src="assets/SSBB_S.mp3";
      Sound.load();
      Sound.play();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  constructor() { }

  personajes = [
    {
      nombre: "pikachu",
      imagen: "assets/Pikachu_SSB.png"
    },
    {
      nombre: "kirby",
      imagen: "assets/Kirby_SSB.png"
    },
    {
      nombre: "fox",
      imagen: "assets/Fox_SSB.png"
    },
    {
      nombre: "captain-falcon",
      imagen: "assets/Captain_falcon_SSB.png"
    },
    {
      nombre: "mario",
      imagen: "assets/Mario_SSB.png"
    }
  ]

 

  ngOnInit() {
  }

  Sonido()
  {
      let Sound=new Audio();
      Sound.src="assets/SSB_S.mp3";
      Sound.load();
      Sound.play();
  }

}

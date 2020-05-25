import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  constructor() { }

  personajes = [
    {
      nombre: "roy",
      imagen: "assets/main.webp"
    },
    {
      nombre: "richter-belmont",
      imagen: "assets/main8.webp"
    },
    {
      nombre: "lucina",
      imagen: "assets/Lucina_SSB4.png"
    },
    {
      nombre: "mewtwo",
      imagen: "assets/main 1.webp"
    },
    {
      nombre: "wario",
      imagen: "assets/Warioland_Wario_-_Super_Smash_Bros._for_Nintendo_3DS_and_Wii_U.png"
    }
  ]


  ngOnInit() {
  }

  Sonido()
  {
      let Sound=new Audio();
      Sound.src="assets/SSB4_S.mp3";
      Sound.load();
      Sound.play();
  }

}

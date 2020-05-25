import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor() { }

  personajes = [
    {
      nombre: "falco",
      imagen: "assets/Falco_-_Super_Smash_Bros._Melee.png"
    },
    {
      nombre: "marth",
      imagen: "assets/pngocean.com.png"
    },
    {
      nombre: "sheik",
      imagen: "assets/Sheik_-_Super_Smash_Bros._Melee.png"
    },
    {
      nombre: "jigglypuff",
      imagen: "assets/5380.png"
    },
    {
      nombre: "peach",
      imagen: "assets/Peach_-_Super_Smash_Bros._Melee.png"
    }
  ]

  ngOnInit() {
  }

  Sonido()
  {
      let Sound=new Audio();
      Sound.src="assets/melee_S.mp3";
      Sound.load();
      Sound.play();
  }

}

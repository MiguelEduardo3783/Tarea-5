import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  IsPlaying = false;

  constructor() { }

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

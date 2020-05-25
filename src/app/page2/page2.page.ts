import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor() { }

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

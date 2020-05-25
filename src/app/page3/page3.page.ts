import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor() { }

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {

  constructor() { }

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

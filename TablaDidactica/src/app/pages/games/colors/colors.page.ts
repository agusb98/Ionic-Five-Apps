import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
})
export class ColorsPage implements OnInit {

  public colors = [
    { name: 'white', img: './assets/img/colors/white.png' },
    { name: 'red', img: './assets/img/colors/red.png' },
    { name: 'orange', img: './assets/img/colors/orange.png' },
    { name: 'black', img: './assets/img/colors/black.png' },
    { name: 'yellow', img: './assets/img/colors/yellow.png' },
    { name: 'light blue', img: './assets/img/colors/light blue.png' },
    { name: 'grey', img: './assets/img/colors/grey.png' },
    { name: 'violet', img: './assets/img/colors/violet.png' },
    { name: 'pink', img: './assets/img/colors/pink.png' },
    { name: 'green', img: './assets/img/colors/green.png' },
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.play('languaje');
  }

  play(name: string) {
    let lang = localStorage.getItem('lang');
    let path = './assets/audios/' + lang + '/' + name + '.wav';

    let audio = new Audio(path);
    audio.play();
  }

  clickCol(color) {
    let doc = document.getElementById(color.name);
    doc.classList.add('slide-in-fwd-center');
    this.play(color.name);

    this.removeSlide(doc);
  }

  removeSlide(doc: HTMLElement) {
    setTimeout(function () { doc.classList.remove('slide-in-fwd-center'); }, 3000);
  }
}

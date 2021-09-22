import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  public languajes = [
    { name: 'english', img: './assets/icon/flageu.png' },
    { name: 'spanish', img: './assets/icon/flagarg.png' },
    { name: 'portuguese', img: './assets/icon/flagbr.png' }
  ]

  public games = [
    { name: 'numbers', img: './assets/img/numbers/icon.jpg' },
    { name: 'colors', img: './assets/img/colors/icon.jpg' },
    { name: 'animals', img: './assets/img/animals/icon.jpg' }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkLang();
  }

  checkLang() {
    let lang = localStorage.getItem('lang');
    if (lang != 'spanish' && lang != 'english' && lang != 'porguese') {
      localStorage.setItem('lang', 'spanish');
    }
  }

  clickGame(game) {
    this.router.navigate([game]);
  }

  clickLang(lang) {
    localStorage.setItem('lang', lang.name);
    this.play('languaje');
  }

  play(name: string) {
    let lang = localStorage.getItem('lang');
    let path = './assets/audios/' + lang + '/' + name + '.wav';

    let audio = new Audio(path);
    audio.play();
  }
}

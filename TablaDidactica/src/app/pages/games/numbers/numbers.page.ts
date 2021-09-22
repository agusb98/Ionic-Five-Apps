import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage implements OnInit {

  public numbers = [
    { name: '0', img: './assets/img/numbers/0.png' },
    { name: '1', img: './assets/img/numbers/1.png' },
    { name: '2', img: './assets/img/numbers/2.png' },
    { name: '3', img: './assets/img/numbers/3.png' },
    { name: '4', img: './assets/img/numbers/4.png' },
    { name: '5', img: './assets/img/numbers/5.png' },
    { name: '6', img: './assets/img/numbers/6.png' },
    { name: '7', img: './assets/img/numbers/7.png' },
    { name: '8', img: './assets/img/numbers/8.png' },
    { name: '9', img: './assets/img/numbers/9.png' }
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

  clickNum(num) {
    let doc = document.getElementById(num.name);
    doc.className = 'jello-horizontal';
    this.play(num.name);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {

  public animals = [
    { name: 'chicken', img: './assets/img/animals/chicken.png' },
    { name: 'horse', img: './assets/img/animals/horse.png' },
    { name: 'zebra', img: './assets/img/animals/zebra.png' },
    { name: 'pig', img: './assets/img/animals/pig.png' },
    { name: 'elephant', img: './assets/img/animals/elephant.png' },
    { name: 'chick', img: './assets/img/animals/chick.png' },
    { name: 'rooster', img: './assets/img/animals/rooster.png' },
    { name: 'cat', img: './assets/img/animals/cat.png' },
    { name: 'giraffe', img: './assets/img/animals/giraffe.png' },
    { name: 'hippopotamus', img: './assets/img/animals/hippopotamus.png' },
    { name: 'lion', img: './assets/img/animals/lion.png' },
    { name: 'monkey', img: './assets/img/animals/monkey.png' },
    { name: 'sheep', img: './assets/img/animals/sheep.png' },
    { name: 'cow', img: './assets/img/animals/cow.png' },
    { name: 'mouse', img: './assets/img/animals/mouse.png' },
    { name: 'tiger', img: './assets/img/animals/tiger.png' },
    { name: 'toucan', img: './assets/img/animals/toucan.png' },
    { name: 'fox', img: './assets/img/animals/fox.png' }
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

  clickAnimal(an) {
    let doc = document.getElementById(an.name);
    doc.classList.add('wobble-hor-bottom');
    this.play(an.name);

    this.removeWobble(doc);
  }

  removeWobble(doc: HTMLElement) {
    setTimeout(function () { doc.classList.remove('wobble-hor-bottom'); }, 1000);
  }
}

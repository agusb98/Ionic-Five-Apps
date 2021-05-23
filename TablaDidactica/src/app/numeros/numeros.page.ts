import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {
  public temas = false;
  public lenguajes = false;
  public brActive: boolean = false;
  public argActive: boolean = true;
  public euActive: boolean = false;
  public idiomaSeleccionado: string = "ar";
  public numeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }
  ionViewWillEnter(){
    this.seleccionarIdiomaLatino();
    setTimeout(() => {

      let flagArg = document.getElementById('flagArg');
      flagArg.setAttribute('class', "imagen-Icon flag flag-active");//setear bandera en active.
    }, 200);
  }
  toggleTemas() {
    this.temas ? this.temas = false : this.temas = true;
  }
  toggleLenguajes() {
    this.lenguajes ? this.lenguajes = false : this.lenguajes = true;
    console.log(this.lenguajes);
  }
  ngOnInit() {
    setTimeout(() => {

      let flagArg = document.getElementById('flagArg');
      flagArg.setAttribute('class', "imagen-Icon flag flag-active");//setear bandera en active.
    }, 200);
  }


  DesactivarFlag(flag) {
    flag.removeAttribute('class');
    flag.setAttribute('class', "imagen-Icon flag");//setear bandera en active.
  }
  ActivarFlag(flag) {
    flag.setAttribute('class', "imagen-Icon flag flag-active");//setear bandera en active.
  }
  seleccionarIdiomaPortugues() {
    this.brActive = true;
    this.argActive = false;
    this.euActive = false;
    this.idiomaSeleccionado = "br";
    let audio = new Audio("../../assets/audios/flags/Flagbr.wav");
    audio.play();
    let flagEu = document.getElementById('flagEu');
    let flagBr = document.getElementById('flagBr');
    let flagArg = document.getElementById('flagArg');
    this.ActivarFlag(flagBr);
    this.DesactivarFlag(flagEu);
    this.DesactivarFlag(flagArg);
  }

  seleccionarIdiomaIngles() {
    this.brActive = false;
    this.argActive = false;
    this.euActive = true;
    let audio = new Audio("../../assets/audios/flags/Flageng.wav");
    audio.play();
    this.idiomaSeleccionado = "eng";
    let flagEu = document.getElementById('flagEu');
    let flagBr = document.getElementById('flagBr');
    let flagArg = document.getElementById('flagArg');
    this.ActivarFlag(flagEu);
    this.DesactivarFlag(flagBr);
    this.DesactivarFlag(flagArg);
  }

  seleccionarIdiomaLatino() {
    this.brActive = false;
    this.argActive = true;
    this.euActive = false;
    this.idiomaSeleccionado = "ar";
    let audio = new Audio("../../assets/audios/flags/Flagarg.wav");
    audio.play();
    let flagEu = document.getElementById('flagEu');
    let flagBr = document.getElementById('flagBr');
    let flagArg = document.getElementById('flagArg');
    this.ActivarFlag(flagArg);
    this.DesactivarFlag(flagBr);
    this.DesactivarFlag(flagEu);
  }

  reproducirAudio(e) {
    let path;
    if (this.euActive) {
      path = '../../assets/audios/numeros/' + e + 'eng.wav';
      let audio = new Audio(path);
      audio.play();
    } else if (this.brActive) {
      path = '../../assets/audios/numeros/' + e + 'br.wav';
      let audio = new Audio(path);
      audio.play();
    } else {
      path = '../../assets/audios/numeros/' + e + 'esp.wav';
      let audio = new Audio(path);
      audio.play();
    }

  }

}

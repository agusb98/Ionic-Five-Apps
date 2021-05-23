import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {
  public brActive: boolean = false;
  public argActive: boolean = true;
  public euActive: boolean = false;
  public idiomaSeleccionado: string = "arg";
  public colores: string[] = ["negro", "azul", "gris", "verde", "naranja", "violeta", "rojo", "blanco", "amarillo", "celeste"];
  constructor() { }
  public temas = false;
  public lenguajes = false;
  toggleTemas() {
    this.temas ? this.temas = false : this.temas = true;
  }
  toggleLenguajes() {
    this.lenguajes ? this.lenguajes = false : this.lenguajes = true;
    console.log(this.lenguajes);
  }
  ionViewWillEnter(){
    this.seleccionarIdiomaLatino();
    setTimeout(() => {

      let flagArg = document.getElementById('flagArg');
      flagArg.setAttribute('class', "imagen-Icon flag flag-active");//setear bandera en active.
    }, 200); 
  }
  ngOnInit() {
    setTimeout(() => {

      let flagArg = document.getElementById('flagArg');
      flagArg.setAttribute('class', "imagen-Icon flag flag-active");//setear bandera en active.
    }, 200);
  }


  DesactivarFlag(flag) {
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
    this.idiomaSeleccionado = "arg";
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
      path = '../../assets/audios/colores/' + e + 'eng.wav';
      let audio = new Audio(path);
      audio.play();
    } else if (this.brActive) {
      path = '../../assets/audios/colores/' + e + 'br.wav';
      let audio = new Audio(path);
      audio.play();
    } else {
      path = '../../assets/audios/colores/' + e + 'arg.wav';
      let audio = new Audio(path);
      audio.play();
    }

  }
}

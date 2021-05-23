import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-de-juego',
  templateUrl: './seleccion-de-juego.page.html',
  styleUrls: ['./seleccion-de-juego.page.scss'],
})
export class SeleccionDeJuegoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnLogout() {
    this.router.navigateByUrl('logout');
  }

}

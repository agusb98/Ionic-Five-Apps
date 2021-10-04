import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  logout() {
    this.router.navigate(['user/logout']);
  }

  classSelected(clase: string){
    localStorage.setItem('class', clase);
    this.router.navigate(['chat']);
  }
}

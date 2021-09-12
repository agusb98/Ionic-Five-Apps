import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  password: string;
  status: boolean;
  showToUnlock: boolean;
  errorCount: number;

  subscription: any;

  constructor(
    private deviceMotion: DeviceMotion,
    private flashlight: Flashlight,
    private router: Router,
    private screenOrientation: ScreenOrientation,
    private vibration: Vibration
  ) { }

  ngOnInit() {
    this.password = '';
    this.status = true;
    this.showToUnlock = false;
    this.errorCount = 0;

    let doc = document.getElementById('img');
    doc.style.filter = 'none';
  }

  onImg() {
    if (this.status) {
      this.onActive();
    }
    else {
      this.showToUnlock = true;
    }
  }

  onActive() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
    this.status = false;

    let doc = document.getElementById('img');
    doc.style.filter = 'invert(100%)';
    this.activeAceleration();
  }

  onDesactive() {
    this.ngOnInit();
    this.subscription.unsubscribe();
  }

  onUnlock() {
    if (localStorage.getItem('password') === this.password) {
      this.ngOnInit();
    }
    else {
      this.errorCount++;
      document.getElementById("title").innerHTML = "Contraseña Incorrecta";
      this.password = '';

      if (this.errorCount >= 3) {
        this.playAudio("/assets/audios/alarmaUno.wav");
      }
    }
  }

  activeAceleration() {
    this.subscription = this.deviceMotion.watchAcceleration({ frequency: 300 }).subscribe((acceleration: DeviceMotionAccelerationData) => {
      if (acceleration.x > 5) {
        this.playAudio("/assets/audios/estaHurtando.wav");
      }
      else if (acceleration.x < -5) {
        this.playAudio("/assets/audios/esMio.wav");
      }
      else if (acceleration.y >= 9) {
        this.playAudio("/assets/audios/alarmaDos.wav");
        this.activeFlash(5);
      }
      else if (acceleration.z >= 9 && (acceleration.y >= -1 && acceleration.y <= 1) && (acceleration.x >= -1 && acceleration.x <= 1)) {
        this.playAudio("/assets/audios/vibrando.wav");
        this.activeVib(5);
      }
    });
  }

  activeFlash(seconds: number) {
    this.flashlight.switchOn();
    setTimeout(() => { this.flashlight.switchOff(); }, seconds * 1000);
  }

  activeVib(seconds: number) {
    this.playAudio("/assets/audios/vibrando.wav");
    this.vibration.vibrate(seconds * 1000);
  }

  playAudio(path: string) {
    const audio = new Audio(path);
    audio.play();
  }

  onLogout() {
    this.router.navigate(['logout']);
  }
}

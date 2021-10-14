import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RecargasService } from 'src/app/services/recargas.service';
import { Recarga } from 'src/app/classes/recarga';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  credits: Recarga[];
  email: string;

  myCredits = [
    { code: "8c95def646b6127282ed50454b73240300dccabc", value: 10 },
    { code: "ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172 ", value: 50 },
    { code: "2786f4877b9091dcad7f35751bfcf5d5ea712b2f", value: 100 }
  ]

  constructor(
    private recargasService: RecargasService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private vibration: Vibration,
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {
    this.getRecargas();
  }

  getRecargas() {
    let email = localStorage.getItem('user');

    this.recargasService.getByUser(email).subscribe(credits => {
      this.email = email;
      this.credits = credits;
    });
  }

  getAcum() {
    let acum = 0;

    try {
      this.credits.forEach(credit => {
        acum += credit.value;
      });
    } catch (error) { }

    this.styleAcum();
    this.styleBtn();
    return acum;
  }

  styleAcum() {
    let doc = document.getElementById('acum');

    if (doc.innerHTML.toString() == "$0") { doc.style.color = 'red'; }
    else if (doc.innerHTML.toString() == "$10") { doc.style.color = 'yellow'; }
    else { doc.style.color = 'green'; }
  }

  styleBtn() {
    let doc: any = document.getElementById('acum');

    if (doc.innerHTML.toString() == "$0") {
      doc = document.getElementById('btn');
      doc.disabled = true;
    }
    else {
      doc = document.getElementById('btn');
      doc.disabled = false;
    }
  }

  scanCode() {
    let auxCredit;

    this.barcodeScanner.scan().then(barcodeData => {
      this.myCredits.forEach(data => {
        if (data.code == barcodeData.text) {
          auxCredit = data;
          auxCredit.email = this.email;
          auxCredit.date = new Date().getTime();
        }
      });

      if (auxCredit) {
        this.credits.forEach(c => {
          if (c.code == auxCredit.code) { auxCredit = null; }
        });

        if (auxCredit) { 
          this.recargasService.create(auxCredit); 
          this.toastr.success('Operación realizada con éxito', 'Recarga QR');
        }
        else { this.toastr.error('previamente usted ya realizó esta recarga', 'Recarga QR'); }
      }
      else { this.toastr.error('el QR no coincide con ninguno de los almacenados', 'Recarga QR'); }
    });
  }

  logout() {
    this.authService.logout();
    this.toastr.success('Salida con éxito', 'Cerrar Sesión');
    this.vibration.vibrate([1000, 500, 1000]);
    this.router.navigate(['login']);
  }

  retry() {
    this.credits.forEach(data => {
      this.recargasService.delete(data);
      this.toastr.success('Recargas eliminadas con éxito', 'Eliminar');
    });
  }
}

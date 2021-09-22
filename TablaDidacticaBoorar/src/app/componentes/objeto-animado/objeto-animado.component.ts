import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-objeto-animado',
  templateUrl: './objeto-animado.component.html',
  styleUrls: ['./objeto-animado.component.scss'],
})
export class ObjetoAnimadoComponent implements OnInit {
  @Input() pathImagen:string;
  @Input() pathAudio:string;
  @Input() clase:string;
  constructor() { }

  ngOnInit() {}

  reproducirAudio()
  {
    let audio=new Audio(this.pathAudio);// desde aca seguir.
    audio.play();    
  }

}

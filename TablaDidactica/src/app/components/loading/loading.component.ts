import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  loading$: Subject<boolean>;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() { this.loading$ = this.loadingService.loading$; }
}

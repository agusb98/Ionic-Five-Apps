import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureService } from 'src/app/services/picture.service';
import { Photo } from 'src/app/shared/interface/photo';

@Component({
  selector: 'app-list-bad',
  templateUrl: './list-bad.page.html',
  styleUrls: ['./list-bad.page.scss'],
})
export class ListBadPage implements OnInit {

  listPhotos: Observable<Photo[]>;

  constructor(private picService: PictureService) { }

  ngOnInit() {
    this.listPhotos = this.picService.getAllByKynd('bad').valueChanges();
  }

}

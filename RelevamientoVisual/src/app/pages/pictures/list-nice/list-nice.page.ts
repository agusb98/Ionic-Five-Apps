import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureService } from 'src/app/services/picture.service';
import { Photo } from 'src/app/shared/interface/photo';

@Component({
  selector: 'app-list-nice',
  templateUrl: './list-nice.page.html',
  styleUrls: ['./list-nice.page.scss'],
})
export class ListNicePage implements OnInit {

  listPhotos: Observable<Photo[]>;
  newPhoto: Photo = new Photo();

  constructor(private picService: PictureService) { }

  ngOnInit() {
    this.listPhotos = this.picService.getAllByKynd('nice').valueChanges();
  }

  add() {
    this.newPhoto.user = localStorage.getItem('email');
    this.newPhoto.kynd = 'nice';

    this.picService.add(this.newPhoto, 'list-' + this.newPhoto.kynd)
  }

}

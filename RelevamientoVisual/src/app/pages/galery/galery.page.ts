import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pic } from 'src/app/classes/pic';
import { Vote } from 'src/app/classes/vote';
import { GaleryService } from 'src/app/services/galery.service';
import { StorageService } from 'src/app/services/storage.service';
import { VoteService } from 'src/app/services/vote.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})

export class GaleryPage implements OnInit {

  votes: any[];
  pics$: Observable<Pic[]>;
  newPic: any;
  picSelected: Pic;
  data: any;

  constructor(
    private camera: Camera,
    private router: Router,
    private route: ActivatedRoute,
    private voteService: VoteService,
    private galeryService: GaleryService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.votes = [];
    this.getPictures();
    this.getVotes();
  }

  getPictures() {
    let kynd = this.route.snapshot.paramMap.get('kynd');
    this.pics$ = this.galeryService.getAllByKynd(kynd);
  }

  getPicturesByUser() {
    let email = localStorage.getItem('user');

    this.pics$ = this.pics$.pipe(
      map(pics => pics.filter(m => m.user.includes(email))));
  }

  onChangePictures(event) {
    if (event.target.checked) { this.getPicturesByUser(); }
    else { this.ngOnInit(); }
  }

  async getVotes() {
    this.pics$.subscribe(pics => {
      this.voteService.getAll().subscribe(votes => {
        let count = 0;
        this.votes = [];

        pics.forEach(pic => {
          votes.forEach(vote => {
            if (vote.picId == pic.id && vote.vote == true) {
              count++;
            }
            else if (vote.picId == pic.id && vote.vote == false) {
              count--;
            }
          });

          if (count < 0) { count = 0; }
          const res = { id: pic.id, count: count, date: pic.date, user: pic.user };
          this.votes.push(res);
        });
      });
    });
  }

  async takePic() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 500,
      targetHeight: 500,
      quality: 90,
    };

    this.camera.getPicture(options).then((data) => {
      this.newPic = `data:image/jpeg;base64,${data}`;
      this.savePic();
    });
  }

  savePic() {
    try {
      let pic: Pic = {
        id: '',
        user: localStorage.getItem('user'),
        date: new Date().getTime(),
        kynd: this.route.snapshot.paramMap.get('kynd'),
        url: this.newPic
      }
      this.galeryService.createOne(pic);
    }
    catch (error) { console.log(error); }
  }

  clickLike() {
    let vote: Vote = {
      id: '',
      picId: this.picSelected.id,
      vote: true,
      user: localStorage.getItem('user')
    }

    this.checkVote().subscribe(data => {
      if (data.length == 0) {
        this.voteService.createOne(vote);
      }
    })
  }

  clickDislike() {
    let vote: Vote = {
      id: '',
      picId: this.picSelected.id,
      vote: false,
      user: localStorage.getItem('user')
    }

    this.checkVote().subscribe(data => {
      if (data.length == 0) {
        this.voteService.createOne(vote);
      }
    })
  }

  checkVote() {
    return this.voteService.repeatVote(this.picSelected.id, localStorage.getItem('user'));
  }

  clickStadistics() {
    let data = this.route.snapshot.paramMap.get('kynd');

    if (data == 'nice') { this.getPieChart(); }
    else if (data == 'ugly') { this.getBarChart(); }
  }

  getPieChart() {
    let labels = this.votes.map(v => {
      return v.user + ' ' + v.date;
    });

    let data = this.votes.map(v => {
      return v.count;
    });

    let colours = ['lightblue', 'lightcoral', 'lightseagreen', 'magenta', 'midnightblue', 'orange', 'plum', 'royalblue', 'turquoise', 'yellowgreen',
      'red', 'rebeccapurple', 'saddlebrown', 'seashell', 'teal', 'blue'];

    this.data = {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colours,
        hoverBackgroundColor: colours
      }]
    };
  }

  getBarChart() {
    let colours = ['lightblue', 'lightcoral', 'lightseagreen', 'magenta', 'midnightblue', 'orange', 'plum', 'royalblue', 'turquoise', 'yellowgreen',
      'red', 'rebeccapurple', 'saddlebrown', 'seashell', 'teal', 'blue'];

    let datasets = this.votes.map(v => {
      let color = colours[Math.floor(Math.random() * (colours.length - 0)) + 0];

      return {
        label: v.user + ' ' + v.date,
        backgroundColor: color,
        borderColor: color,
        data: [v.count]
      }
    });

    this.data = {
      legend: { display: false },
      labels: ['Votos'],
      datasets: datasets
    }
  }

  clickHome() {
    this.router.navigate(['home']);
  }
}

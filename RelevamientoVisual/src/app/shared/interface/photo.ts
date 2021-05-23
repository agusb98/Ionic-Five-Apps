let date: Date = new Date();

export class Photo {
    user: string = '';
    photo: string = '';
    kynd: string = '';
    likes: number = 0;
    not_likes: number = 0;
    date: string = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
}
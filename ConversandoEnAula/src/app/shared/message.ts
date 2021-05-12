let date: Date = new Date();

export class Message {
    class: string = '';
    from: any = '';
    message: string = '';
    date: string = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
    time: string = date.getHours() + ':' + date.getMinutes();
}
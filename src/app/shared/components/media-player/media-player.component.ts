import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: any = {
    cover: 'https://images.freeimages.com/images/large-previews/f87/halloween-1467758.jpg',
    name: 'Arriba',
    album: '1000 Canciones'
  }
  constructor() { }

  ngOnInit(): void {
  }

}

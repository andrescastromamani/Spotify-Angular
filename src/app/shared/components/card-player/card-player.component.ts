import { Component, OnInit, Input } from '@angular/core';
import { Track } from '@core/models/track.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: Track = { _id: 0, name: '', album: '', url: '', cover: '' };

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { Track } from '@core/models/track.model';
import * as datas from '@data/tracks.json';

@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.css']
})
export class GenericSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() tracks: Array<Track> = [];

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (datas as any).default;
    this.tracks = data;
  }

}

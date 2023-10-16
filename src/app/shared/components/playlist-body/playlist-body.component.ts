import { Component, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';
import * as datas from '@data/tracks.json';

@Component({
  selector: 'app-playlist-body',
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.css']
})
export class PlaylistBodyComponent implements OnInit {
  tracks: Track[] = []

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (datas as any).default;
    this.tracks = data;
  }

}

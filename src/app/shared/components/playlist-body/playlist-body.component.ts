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
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (datas as any).default;
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);

  }

}

import { Component, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
  tracksTrending: Array<Track> = [];
  tracksRandom: Array<Track> = [];

  constructor() { }

  ngOnInit(): void {
  }

}

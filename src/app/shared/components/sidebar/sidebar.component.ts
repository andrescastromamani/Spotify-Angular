import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] };

  customOptions: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        route: ['/', 'auth']
      },
      {
        name: 'Search',
        icon: 'uil-search',
        route: ['/', 'auth']
      },
      {
        name: 'Your Library',
        icon: 'uil-chart',
        route: ['/', 'auth']
      }
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Create Playlist',
        icon: 'uil-plus-square'
      },
      {
        name: 'Liked Songs',
        icon: 'uil-heart-medical'
      }
    ];

    this.customOptions = [
      {
        name: 'Reggae Classics',
        router: ['/']
      },
      {
        name: 'My list º2',
        router: ['/']
      },
      {
        name: 'M º3',
        router: ['/']
      }
    ];
  }
}

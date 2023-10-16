import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderComponent } from './components/header/header.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistBodyComponent } from './components/playlist-body/playlist-body.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderComponent,
    GenericSectionComponent,
    CardPlayerComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderComponent,
    GenericSectionComponent,
    CardPlayerComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent
  ]
})
export class SharedModule { }

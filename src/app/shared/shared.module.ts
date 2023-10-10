import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderComponent } from './components/header/header.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderComponent,
    GenericSectionComponent,
    CardPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderComponent,
    GenericSectionComponent,
    CardPlayerComponent
  ]
})
export class SharedModule { }

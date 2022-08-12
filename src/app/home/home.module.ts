import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { SynopsisComponent } from '../synopsis/synopsis.component';
import { CharactersModule } from '../characters/characters.module'

@NgModule({
  declarations: [HomeComponent, SynopsisComponent],
  exports: [HomeComponent],
  imports: [CommonModule, CharactersModule, SharedModule ],
})
export class HomeModule { }
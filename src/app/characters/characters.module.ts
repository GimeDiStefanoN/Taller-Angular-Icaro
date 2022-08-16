import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCharactersComponent } from './main-characters/main-characters.component';
import { MonstersComponent } from './monsters/monsters.component';
import { MaterialModule } from '../material/material.module'



@NgModule({
  declarations: [
    MainCharactersComponent,
    MonstersComponent
  ],
  exports: [MainCharactersComponent,
    MonstersComponent],
  imports: [
    CommonModule, MaterialModule
  ]  
})

export class CharactersModule { }

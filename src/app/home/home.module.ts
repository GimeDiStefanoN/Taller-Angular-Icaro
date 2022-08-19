import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { SynopsisComponent } from '../synopsis/synopsis.component';
import { CharactersModule } from '../characters/characters.module'
import { MaterialModule } from '../material/material.module';
import { ProductosModule } from '../productos/productos.module';
import { FormularioModule } from '../formulario/formulario.module';

@NgModule({
  declarations: [HomeComponent, SynopsisComponent],
  exports: [HomeComponent],
  imports: [CommonModule, CharactersModule, SharedModule, MaterialModule, FormularioModule, ProductosModule],
})
export class HomeModule { }
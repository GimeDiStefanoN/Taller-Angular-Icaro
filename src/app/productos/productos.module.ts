import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module'
import { ProductosComponent } from './productos.component';


@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [ProductosComponent, MaterialModule],
  providers:[]
})
export class ProductosModule { }

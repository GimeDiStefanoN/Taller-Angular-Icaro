import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module'
import { FormularioComponent } from './formulario.component';


@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [FormularioComponent, MaterialModule],
})
export class FormularioModule { }

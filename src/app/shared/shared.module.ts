import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module'


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [ CommonModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, MaterialModule],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';




const components = [MatToolbarModule, MatTableModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatInputModule, MatIconModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class MaterialModule { }

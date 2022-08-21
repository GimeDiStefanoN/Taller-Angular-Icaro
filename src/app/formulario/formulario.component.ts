import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  hide = true;

  miForm: FormGroup = this.fb.group({
      'nombre': [null , [Validators.required, Validators.minLength(5)]],
      'personaje': [null , [Validators.required]],
      'email': [null , [Validators.required, Validators.email]],
      'password': [null , [Validators.required, Validators.minLength(8)]],
    })
    
  
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  campoValido(campo:string){
    return (this.miForm.controls[campo]?.errors && this.miForm.controls[campo]?.touched)  
  }

  guardar() {
    if(this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }
    console.log('Formulario enviado OK');
    console.log(this.miForm.value);
    this.openSnackBar()
    this.miForm.reset();
  }

  openSnackBar(){
    this.snackBar.open('Formulario enviado con Exito', 'cerrar')
  }
}

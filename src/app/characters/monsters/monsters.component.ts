import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  botonOcultar = false;

  demogorgon = false;
  mindFlyers = false;
  vecna = false;


  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  mostrarDemogorgon(){
    this.demogorgon =true;
    this.botonOcultar =true
    this.snackBar.open("Criatura humanoide depredadora", "", {duration: 6000});

  };

  mostrarMindFlyers(){
    this.mindFlyers =true;
    this.botonOcultar =true;
    this.snackBar.open("Controla la mente de las personas", "", {duration: 6000});
  };

  mostrarVecna(){
    this.vecna =true;
    this.botonOcultar =true;
    this.snackBar.open("Posee a sus víctimas y se alimenta de sus traumas mas oscuros", "", {duration: 6000});

  };

  ocultarMounstros(){
    this.botonOcultar = false;
    this.demogorgon = false;
    this.mindFlyers = false;
    this.vecna = false;
  }
}
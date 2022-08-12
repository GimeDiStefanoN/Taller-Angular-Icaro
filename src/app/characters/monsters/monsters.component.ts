import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  siverMounstros = false;
  siocultarMounstros = false;

  constructor() { }

  ngOnInit(): void {
  }

  verMounstros(){
    this.siverMounstros= true;
    this.siocultarMounstros = true;

  }

  ocultarMounstros(){
    this.siocultarMounstros = false;
    this.siverMounstros= false;

  }

}

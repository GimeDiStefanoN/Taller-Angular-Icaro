import { Component, OnInit } from '@angular/core';
import {MainCharactersModel} from 'src/app/main-characters.model';

@Component({
  selector: 'app-main-characters',
  templateUrl: './main-characters.component.html',
  styleUrls: ['./main-characters.component.css']
})

export class MainCharactersComponent implements OnInit {

  listaPersonajes:MainCharactersModel []= [
    {realName:'Winona Ryder', actor: 'Joyce Byers'},
    {realName: 'David Harbour', actor: 'Jim Hopper'},
    {realName: 'Millie Bobby Brown', actor: 'Once'},
    {realName: 'Finn Wolfhard', actor: 'Mike Wheeler'},
    {realName: 'Gaten Matarazzo', actor: 'Dustin Henderson'},
    {realName: 'Caleb McLaughlin', actor: 'Lucas Sinclair'},
    {realName: 'Noah Schnapp', actor: 'Will Byers'},
    {realName: 'Natalia Dyer', actor: 'Nancy Wheeler'},
    {realName: 'Joe Keery', actor: 'Steve Harrington'},
    {realName: 'Charlie Heaton', actor: 'Jonathan Byers'},
    {realName: 'Cara Buono', actor: 'Karen Wheeler'},
    {realName: 'Matthew Modine', actor: 'Dr. Martin Brenner'}
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}

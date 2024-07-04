import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes:Heroe[] = [];
  constructor(private _heroesService:HeroesService, private router:Router){
      console.log('en el constructor');
  }
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeores();
    console.log('en el oninit');
    console.log(this.heroes);
  }
  verHeroe(index:number){
    console.log(index);
    this.router.navigate(['/heroe',index]);
  }
}

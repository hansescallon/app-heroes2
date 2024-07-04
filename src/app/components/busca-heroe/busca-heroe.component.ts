import { Component } from '@angular/core';
import {Heroe, HeroesService} from '../../servicios/heroes.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-busca-heroe',
  templateUrl: './busca-heroe.component.html',
  styleUrls: ['./busca-heroe.component.css']
})
export class BuscaHeroeComponent {
  term: string = "";
  heroesArr : Heroe[] = [];

constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private router: Router){
  console.log('en el constructor de buscaheroe');



  this.activatedRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.term = params['termino'];
      this.heroesArr = this.heroesService.buscarHeroes(params['termino']);
    })
}
verHeroe(index:number){
  console.log(index);
  this.router.navigate(['/heroe',index]);
}

}


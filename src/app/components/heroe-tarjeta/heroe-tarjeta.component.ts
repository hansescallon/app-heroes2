import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {
  @Input() heroe:any = {};
  @Input() indice:number=0;

  constructor(private router:Router){}

  verHeroe(){
    console.log(this.indice);
    this.router.navigate(['/heroe',this.indice]);

  }
}

import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
donnes : any | undefined;
  cocktails : any | undefined;
constructor( public cockService : CocktailService){

}

ngOnInit(): void {
  this.cockService.getCocktail().subscribe({
    next : (donnes) => {this.donnes = donnes; this.cocktails = this.donnes.mescocktails},
    error : () => {console.log('il y a une erreur')},
    complete : () => {}
      });}
}

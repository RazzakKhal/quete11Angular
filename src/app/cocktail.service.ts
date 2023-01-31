import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http : HttpClient) { }

  getCocktail(){
return this.http.get('assets/data.json');
  }
}

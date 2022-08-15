import { Injectable } from '@angular/core';
import {Movie} from "../model/Movie";
import {first, mergeMap, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  findAll(): Observable<Movie[]>{
    return of(movieList);
  }

  findOne(id: string): Observable<Movie | null> {
    return of(movieList).pipe(mergeMap(m => m),
      first(movie => movie.id == parseInt(id), null));
  }
}
export const movieList: Movie[] = [
  new Movie(0,"Mulan", "Familiar", 1992),
  new Movie(1,"Monsters Inc.", "Familiar", 1992),
  new Movie(2,"Independence day", "Acción", 1996),
  new Movie(3,"The Lovely Bones", "Drama", 2009)
]

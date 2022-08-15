import { Component, OnInit } from '@angular/core';
import {Movie} from "../../model/Movie";
import {MovieService} from "../../service/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  movieSelected: Movie | undefined = undefined;

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
    this.movieService.findAll().subscribe(list => {
      this.movies = list
    })
  }



  selectMovie(m: Movie) {
    this.movieSelected = m;
  }
}

import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/Movie";
import {Router} from "@angular/router";

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  movieSelected: Movie | undefined = undefined;

  constructor(private router: Router,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.findAll().subscribe(list => {
      this.movies = list
    })
  }

  goToDetail(m: Movie) {
    this.router.navigate(['detail', m.id])
  }

}

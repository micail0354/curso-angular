import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../model/Movie";
import {MovieService} from "../../service/movie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

    @Input() movie: Movie | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id)
        this.router.navigate(['list']);

      else {
        console.log('El Id es: ' + id)
        this.movieService.findOne(id).subscribe(res => {
          if (res)
            this.movie = res;
        })
      }
    })
  }

}

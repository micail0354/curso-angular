import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../model/Movie";
import {MovieService} from "../../service/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

    movieForm : FormGroup = this.formBuilder.group({
      id:['',[]],
      title:['',Validators.required],
      genre:['',Validators.required],
      year:['',Validators.required]
    }) 
    sub: Subscription[] = [];
    //@Input() movie: Movie | undefined;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id)
        this.buildForm();

      else {
        console.log('El Id es: ' + id)
        this.loadMovie(id);
      }
    })
  }
  ngOnDestroy() {
    this.sub.forEach(s => s.unsubscribe())
  }
  buildForm(m?: Movie) {
    if (m) {
      this.movieForm.patchValue({
        id: m.id,
        title: m.title,
        genre: m.genre,
        year: m.year
      })
    }
  }

  loadMovie(id: string) {
    this.sub.push(this.movieService.findOne(id).subscribe({
      next: (m) => {
        let movie = new Movie(m.id, m.title, m.genre, m.year);
        this.buildForm(movie)
      },
      error: (err) => alert(err)
    }));
  }
}

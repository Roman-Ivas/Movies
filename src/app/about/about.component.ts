import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';
import { Movies } from '../Movies';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  filmInfo$?:Movies;
  done:boolean=false;
  movies: Movies;
  constructor(private sharedService:SharedService){
    this.movies=sharedService.getFilmInfo();
    console.log("About")
    console.log(this.movies)
    this.done=this.movies?true:false;
  }
}

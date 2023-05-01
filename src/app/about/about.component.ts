import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';
import { Movies } from '../Movies';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit  {
  filmInfo$?:Movies;
  done:boolean=false;
  movies: any;
  constructor(private sharedService:SharedService,private http:HttpService){
    //this.movies=sharedService.getFilmInfo();
   console.log("About")
  }
  ngOnInit(): void {
    this.http.postMovies().subscribe((data:any)=>{
      this.movies=data;
       this.done=this.movies?true:false;
       console.log(this.movies);

    })  }
}

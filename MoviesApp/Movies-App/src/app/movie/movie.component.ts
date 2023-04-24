import { Component } from '@angular/core';
import { Movies } from '../Movies';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
movies:Movies[]=[];
done:boolean=false;
constructor(private http:HttpService){}
submit(){
  console.log("Submit is worked")
  this.http.postMovies("&t=smile").subscribe((data:any)=>{
    this.movies.push(data);
    console.log("Check Array")
    console.log(this.movies[0]);
    console.log("Check Data from Api");
    console.log(data);
    this.done=true;
  })
}
}

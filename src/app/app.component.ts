import { Component } from '@angular/core';
import { Movies } from './Movies';
import { HttpService } from './http.service';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Movies-App';
  //done:boolean=false;
  searchQuery?:string;
  filmInfo?:Movies;
  constructor(private sharedService:SharedService,private http:HttpService){
    // this.filmInfo=new Movies("",9,"","","","","","","");
  }
  onSubmit(){
    //  this.http.postMovies("&t=smile").subscribe((data:any)=>{
    console.log("submit")
    this.http.postMovies(`&t=${this.searchQuery}`).subscribe((data:any)=>{
      this.filmInfo=data;
      console.log(this.filmInfo)
      this.sharedService.setFilmInfo(this.filmInfo!);
      console.log(this.sharedService.getFilmInfo())

     })
  }
}

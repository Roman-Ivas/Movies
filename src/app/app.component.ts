import { Component, OnInit } from '@angular/core';
import { Movies } from './Movies';
import { HttpService } from './http.service';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My-Movies-App';
  //done:boolean=false;
  searchQuery?:string;
  filmInfo:any;
  constructor(private router:Router,private http:HttpService){
    // this.filmInfo=new Movies("",9,"","","","","","","");
  }
  ngOnInit(): void {
    console.log("submit")
    this.http.title=`&t=${this.searchQuery}`;
    }

  onSubmit(){
    //  this.http.postMovies("&t=smile").subscribe((data:any)=>{
    console.log("submit")
    this.http.title=`&t=${this.searchQuery}`;
    this.router.navigate(['about'],{skipLocationChange:false})
    // this.http.postMovies().subscribe((data:any)=>{
    //   this.filmInfo=data;
    // })
    // this.http.postMovies().subscribe((data:any)=>{
    //   this.filmInfo=data;
    //   console.log(this.filmInfo)
    //   this.sharedService.setFilmInfo(this.filmInfo!);
    //   console.log(this.sharedService.getFilmInfo())

    //  })
  }
}

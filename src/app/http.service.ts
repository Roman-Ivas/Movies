import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public title:string="";
  constructor(private http:HttpClient) { }
  postMovies(){
    console.log("Post Movies is worked")
    // console.log(title)
    // console.log(this.http.post("https://www.omdbapi.com/","?apikey=4a848b0c"+title))
    //return this.http.post(`https://www.omdbapi.com/?apikey=4a848b0c&t=${title}`,title);
    return this.http.get(`https://www.omdbapi.com/?apikey=4a848b0c&t=${this.title}`);
    //movies.Title);
  }
}

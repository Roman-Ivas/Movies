import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }
  postMovies(title:string){
    console.log("Post Movies is worked")
    // console.log(title)
    // console.log(this.http.post("https://www.omdbapi.com/","?apikey=4a848b0c"+title))
    return this.http.post(`https://www.omdbapi.com/?apikey=4a848b0c&t=${title}`,title);
    //movies.Title);
  }
}
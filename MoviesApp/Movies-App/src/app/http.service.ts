import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies } from './Movies';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  postUser(movies:Movies){
    return this.http.post("http://www.omdbapi.com/",movies.Title);
  }
}

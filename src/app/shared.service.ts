import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movies } from './Movies';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // private filmInfoSubject:Movies=new Movies("",0,"","","","","","","");
  private filmInfoSubject?:Movies
  constructor() { }
  setFilmInfo(filmInfo:Movies){
    this.filmInfoSubject=filmInfo;
  }
  getFilmInfo():Movies{
    return this.filmInfoSubject!;
  }
}

import { Component } from '@angular/core';
import { Movies } from '../Movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
moviesList?:Movies[];
}

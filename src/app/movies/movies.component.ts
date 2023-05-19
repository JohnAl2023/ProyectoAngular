import { Component, OnInit } from '@angular/core';
import { mainFunction } from '../js/script';

@Component({
  selector: 'app-home',
  templateUrl: './movies.component.html',
  styleUrls: ['./styles.css']
})
export class MoviesComponent implements OnInit {
  ngOnInit() {
    mainFunction();
  }
}
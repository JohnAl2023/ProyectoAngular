import { Component, OnInit } from '@angular/core';
import { mainFunction } from '../js/main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./styles.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    mainFunction();
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //string interpolation
  title = 'Jesus is the way,truth and the life.';
  imageUrl = "../favicon.ico"
  colSpan= 2;

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInput: string;

  searchUser(){
    console.log(this.userInput);
    this.userInput = "";
  }

  constructor() { }

  ngOnInit() {
  }

}

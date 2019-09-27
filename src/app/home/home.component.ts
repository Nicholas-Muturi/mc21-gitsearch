import { Component, OnInit } from '@angular/core';
import { GitUserService } from '../user-service/git-user.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  userInput: string;

  getUserInput(){
    var trimmedInput = this.userInput;
    return trimmedInput;
  }

  searchUser(){
    this.userService.generateURL(this.userInput);
    var result = this.userService.profileSearch();
    if(!result){
      //if promise is rejected
      console.log("error")
    }
    else {
      //if promise is resolved
      this.user = this.userService.user;
    }
    this.userInput="";
  }

  constructor(private userService: GitUserService) {    
  }

  ngOnInit() {
    
  }

}

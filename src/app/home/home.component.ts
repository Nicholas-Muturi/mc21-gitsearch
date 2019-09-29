import { Component, OnInit } from '@angular/core';
import { GitUserService } from '../user-service/git-user.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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

  searchUser(form: NgForm){
    if(this.userInput == ""){
      alert("empty submissions are not allowed");
    }
    else {
      this.userService.generateURL(this.userInput);
      var result = this.userService.profileSearch();
      if(!result){
        //if promise is rejected
        console.log("error")
      }
      else {
        //if promise is resolved
        this.user = this.userService.user;
        setTimeout(()=>{
          this.router.navigate(['/result',this.user.userLoginName]);
        },1000)
        
      }
      this.userInput="";
      form.reset();
      }  
  }

  constructor(private userService: GitUserService, private router: Router) {    
  }

  ngOnInit() {
    
  }

}

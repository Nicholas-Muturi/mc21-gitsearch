import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { ActivatedRoute } from '@angular/router';
import { GitUserService } from '../user-service/git-user.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  user: User;
  repo: Repo;

  // replaceNull(){
  //   if(){

  //   }
  //   else if(){

  //   }
  //   else if(){

  //   }
  //   else if(){

  //   }
  //   else if(){

  //   }
  //   else if(){

  //   }
  //   else if(){

  //   }
  //   else if(){

  //   }

  // }
  
  constructor(private route: ActivatedRoute, private userService: GitUserService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(id);
    this.replaceNull();
  }

}

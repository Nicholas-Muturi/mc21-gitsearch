import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class GitUserService {

  user = new User();
  fullURL: string;

  generateURL(searchedName: string){
    this.fullURL = (environment.apiUrl+"/users/"+searchedName+"?access_tocken="+environment.apiKey)
  }

  profileSearch(){
    interface apiResponse {
      id: number;
      login: string;
      name: string;
      html_url: string;
      avatar_url: string
      email: string;
      bio: string;
      public_repos: number;
      company: string;
      location: string;
      followers: number;
      following: number;
      created_at: string;
    }

    let userPromise = new Promise((resolve,reject)=>{
      this.http.get<apiResponse>(this.fullURL).toPromise().then(response =>{
        this.user.userID = response.id;
        this.user.userLoginName = response.login;
        this.user.userName = response.name;
        this.user.userProfileURL = response.html_url;
        this.user.userAvatar = response.avatar_url;
        this.user.userEmail = response.email;
        this.user.userBio = response.bio;
        this.user.userRepoCount = response.public_repos;
        this.user.userCompany = response.company;
        this.user.userLocation = response.location;
        this.user.userFollowers = response.followers;
        this.user.userFollowing = response.following;
        this.user.userCreationDate = response.created_at;
        
        resolve();
      },err=>{
        reject(err)
      })
    });

    return userPromise;
  }

  getUser(id){
    if(id == this.user.userID){
      return this.user;
    }
    
  }

  constructor(private http: HttpClient) {
    
  }
}

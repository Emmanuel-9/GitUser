import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userName: Users
  retrievedUser: Users
  word: string= "Click to show Repos... "
  constructor(private http: HttpClient, private router: Router) {
    this.userName = new Users("", "",0, "", "", new Date())
   }

  submitUserName(){
     console.log(this.userName['name'])
     this.http.get<Users>(`https://api.github.com/users/${this.userName['name']}`).subscribe({
      
      next: user => this.retrievedUser = user
     })
   }
   goToRepos(){     
     this.router.navigate(['/repository'], {state: {name: this.userName['name']}})
   }


  ngOnInit(): void {
    
  }
}

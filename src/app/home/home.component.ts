import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Repositories } from '../repositories';
import { UserServiceService } from '../user-service.service';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: Users
  repos: Repositories[]

  constructor(private userService: UserServiceService, private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
      
      next: user => this.currentUser = user
    
    })
    this.repoService.getUserRepos().subscribe({
      next: repos => this.repos = repos
      
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Repositories } from '../repositories';
import { UserService } from '../user-service.service';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: Users
  repos: Repositories[]

  constructor(private userService: UserService, private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
      // user => this.currentUser = user,
      next: user => this.currentUser = user
      // next(user) {console.log(user)}
    })
    this.repoService.getUserRepos().subscribe({
      next: repos => this.repos = repos
      // next(repos) {console.log(repos)}
    })
  }

}

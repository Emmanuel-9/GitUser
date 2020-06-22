import { Injectable } from '@angular/core';
import { Repositories } from '../app/repositories'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  repos: Repositories[]
  private repoUrl = 'https://api.github.com/users/Emmanuel-9/repos'
  constructor(private http: HttpClient) { }

  getUserRepos(): Observable<Repositories[]>{
    return this.http.get<Repositories[]>(this.repoUrl);
  }
}

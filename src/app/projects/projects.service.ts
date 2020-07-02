import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsUrl = 'assets/projects.json';

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get<Project[]>(this.projectsUrl);
  }
}

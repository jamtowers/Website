import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from './projects.service';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private titleService: Title, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.titleService.setTitle( "James Towers - Projects" );

    this.projectsService.getProjects()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
      });
  }

}

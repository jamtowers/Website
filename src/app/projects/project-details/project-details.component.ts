import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';
import { Title } from '@angular/platform-browser';
import { Clipboard } from '@angular/cdk/clipboard'; 

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;
  ploading: boolean = true;
  mdloading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private titleService: Title,
    private clipboard: Clipboard
  ) { }

  ngOnInit(): void {
    const projects = this.projectsService.getProjects()
    const paramMap = this.route.paramMap

    projects
      .subscribe((projects: Project[]) => {
        paramMap
          .subscribe(params => {
            this.project = projects.find(project => project.name == params.get('projectName'));

            this.titleService.setTitle( "James Towers - " + this.project.name );

            this.ploading = false;
          });
      });
  }
  
  copyLink() {
    if(this.clipboard.copy(window.location.href)) {
      console.log("success");
    }
    else{
      console.log("failed");
    }
  }

  onLoad() {
    this.mdloading = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';
import { Title } from '@angular/platform-browser';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
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
      this.snackBar.open("Copied to clipboard!", null, {
        duration: 5000
      });
    }
    else {
      this.snackBar.open("Couldn't copy to clipboard for some reason, try again.", null, {
        duration: 10000
      });
    }
  }

  onLoad() {
    this.mdloading = false;
  }
}

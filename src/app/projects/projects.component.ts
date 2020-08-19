import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProjectsService } from './projects.service';
import { Project } from './project';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(
    private titleService: TitleService,
    private projectsService: ProjectsService,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) {
    this.titleService.setTitle("Projects");
  }

  ngOnInit(): void {
    this.projectsService.getProjects()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
      });
  }

  copyLink(projectName: string) {
    if(this.clipboard.copy(`${window.location.href}/${encodeURI(projectName)}`)) {
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

}

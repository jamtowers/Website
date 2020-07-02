import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ProjectsService } from './projects/projects.service';
import { Project } from './projects/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Website';
  projects: Project[];

  constructor(private breakpointObserver: BreakpointObserver, private projectsService: ProjectsService) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.projectsService.getProjects()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
      });
  }
}

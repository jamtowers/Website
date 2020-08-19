import { Component, OnInit, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ProjectsService } from './projects/projects.service';
import { Project } from './projects/project';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Website';
  projects: Project[];
  themes = [
    // ['theme css name', 'Human readable name'],
    ['default-theme', 'Dark Theme'],
    ['light-theme', 'Light Theme']
  ];
  activeTheme: number = 0;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private projectsService: ProjectsService,
    public overlayContainer: OverlayContainer,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/images/GitHub-Mark.svg'));
  }

  @HostBinding('class') componentCssClass;

  setTheme(theme: number) {
    // remove active theme from the overlayContainer
    this.overlayContainer.getContainerElement().classList.remove(this.themes[this.activeTheme][0]);

    // set activeTheme to presented theme
    this.activeTheme = theme;
    // set overlay and app component class to selected theme
    this.overlayContainer.getContainerElement().classList.add(this.themes[theme][0]);
    this.componentCssClass = this.themes[theme][0];

    // Save active theme so it loads next time they come to site.
    localStorage.theme = this.activeTheme;
  }

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

    // load active theme if it exists
    if(localStorage.theme) {
      this.setTheme(+localStorage.theme);
    }
  }
}

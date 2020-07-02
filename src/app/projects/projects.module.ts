import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SecurityContext } from '@angular/core';
import { MarkedOptions, MarkdownModule, MarkedRenderer } from 'ngx-markdown';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HttpClient } from '@angular/common/http';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.hr = () => {
    return '<span role="separator" class="mat-divider mat-divider-horizontal" aria-orientation="horizontal"></span>';
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: true,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ProjectsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    ClipboardModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory
      }
    })
  ]
})
export class ProjectsModule { }

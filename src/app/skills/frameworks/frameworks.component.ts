import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TitleService } from 'src/app/title.service';
import { FrameworksService } from './frameworks.service';
import { Framework } from './framework';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.scss']
})
export class FrameworksComponent implements OnInit {
  frameworks: Framework[];
  fragment: string;

  constructor(
    private titleService: TitleService,
    private frameworksService: FrameworksService,
    private route: ActivatedRoute
  ) {
    this.titleService.setTitle("Frameworks");
  }

  ngOnInit(): void {
    this.frameworksService.getFrameworks()
      .subscribe((frameworks: Framework[]) => {
        this.frameworks = frameworks;
        console.log(this.frameworks);
      });

      this.route.fragment.subscribe(
        (fragment) => {
          this.fragment = fragment;
        }
      );
  }

}

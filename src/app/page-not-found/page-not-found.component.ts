import { Component, OnInit } from '@angular/core';

import { TitleService } from '../title.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle("Page Not Found");
  }

  ngOnInit() {
  }

}

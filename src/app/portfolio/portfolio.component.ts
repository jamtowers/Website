import { Component, OnInit } from '@angular/core';

import { TitleService } from '../title.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle("Portfolio");
  }

  ngOnInit(): void {
  }

}

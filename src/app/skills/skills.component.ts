import { Component, OnInit } from '@angular/core';

import { TitleService } from '../title.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  loading: boolean = true;

  constructor(private titleService: TitleService) {
    this.titleService.setTitle("Skills");
  }

  ngOnInit(): void {
  }

  onLoad() {
    this.loading = false;
  }

}

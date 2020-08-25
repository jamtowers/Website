import { Component, OnInit } from '@angular/core';

import { TitleService } from 'src/app/title.service';
import { LanguagesService } from './languages.service';
import { LanguageSection } from './language';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languageSections: LanguageSection[];
  fragment: string;

  constructor(
    private titleService: TitleService,
    private languagesService: LanguagesService,
    private route: ActivatedRoute
    ) {
    this.titleService.setTitle("Languages");
  }

  ngOnInit(): void {
    this.languagesService.getSections()
      .subscribe((languageSections: LanguageSection[]) => {
        this.languageSections = languageSections;
      });

    this.route.fragment.subscribe(
      (fragment) => {
        this.fragment = fragment;
      }
    );
  }
}

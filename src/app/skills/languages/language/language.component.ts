import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  @Input() language: Language;
  loading: boolean = true;
  exampleLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

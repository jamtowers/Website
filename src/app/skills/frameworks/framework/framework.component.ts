import { Component, OnInit, Input } from '@angular/core';

import { Framework } from '../framework';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.scss']
})
export class FrameworkComponent implements OnInit {
  @Input() framework: Framework;
  loading: boolean = true;
  exampleLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

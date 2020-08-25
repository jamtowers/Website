import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/title.service';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {
  loading: boolean = true;

  constructor(private titleService: TitleService) {
    this.titleService.setTitle("Concepts");
  }

  ngOnInit(): void {
  }

}

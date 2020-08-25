import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/title.service';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {
  loading: boolean = true;

  constructor(private titleService: TitleService) {
    this.titleService.setTitle("Additional");
  }

  ngOnInit(): void {
  }

}

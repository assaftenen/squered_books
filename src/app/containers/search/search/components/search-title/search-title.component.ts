import { Component, Input, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-search-title',
  templateUrl: './search-title.component.html',
  styleUrls: ['./search-title.component.scss']
})
export class SearchTitleComponent implements OnInit {
@Input() userName: string;

  constructor() { }

  ngOnInit(): void {
  }

}

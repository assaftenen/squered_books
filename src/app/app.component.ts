import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookStore } from './store/data-source';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Search Books App';
  userName: Observable<string>;

  constructor(private store: BookStore) {}

  ngOnInit(): void {
    this.userName = this.store.select('userName');
  }
}

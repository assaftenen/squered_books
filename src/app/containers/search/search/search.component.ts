import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookStore } from 'src/app/store/data-source';
import { State } from '../../../store/data-source';
import { ApiService } from './../../../services/api-service/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Books } from '../../../models/books.interfaces';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  vm$: Observable<State>;
  books: Object;

  constructor(private store: BookStore, private apiService: ApiService) {
    this.vm$ = this.store.select();
  }

  ngOnInit(): void {}

  onSearchBooks(input: string) {
    this.apiService.fetchBooks(input).subscribe( (data: Books) => {
      debugger
        this.store.set('booksList', (data.items))
      },
      (err: HttpErrorResponse) => {
        debugger
        if (err instanceof Error) {
          // handle client side error
        } else {
          // handle BE errors
        }
      }
    );
  }
}

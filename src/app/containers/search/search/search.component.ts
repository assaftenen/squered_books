import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookStore } from 'src/app/store/data-source';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { State } from '../../../store/data-source';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  vm$: Observable<State>;
  searchForm: FormGroup;

  constructor(private store:BookStore, private formBuilder: FormBuilder,) { 
    this.vm$ = this.store.select();
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      bookName: [null, [Validators.required]],
    });

}
}

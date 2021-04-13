import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() searchBookByInput: EventEmitter<string> = new EventEmitter<string>();
  searchForm: FormGroup;
  destroy$: Subject<boolean> = new Subject();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      bookName: [null, [Validators.required]],
    });

    this.searchForm.valueChanges.pipe(takeUntil(this.destroy$),debounceTime(50)).subscribe(res=>{
      this.searchBookByInput.emit(res.bookName);
    })
      
   
}

ngOnDestroy(): void {
this.destroy$.next(true);
this.destroy$.complete();
  
}
}

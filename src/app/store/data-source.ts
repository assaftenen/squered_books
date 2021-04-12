import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

export interface State{
    userName:string
}

@Injectable({
    providedIn: 'root',
   })
export class BookStore {
    readonly initialDataSource: State = {
        userName:undefined
        
    };
    private booksDataSource = new BehaviorSubject<State>(this.initialDataSource);
    booksData$: Observable<State>;

    constructor() {
        this.booksData$ = this.booksDataSource
            .asObservable()
            .pipe(distinctUntilChanged());
    }
    get value() {
        return this.booksDataSource.value;
    }
    select(name?: string): Observable<any> {
        return name ? this.booksData$.pipe(pluck(name)) : this.booksData$;
    }
    set(name: string, state: any) {
        this.booksDataSource.next({
            ...this.value,
            [name]: state,
        });
    }
    update(state: Partial<any>) {
        this.booksDataSource.next({
            ...this.value,
            ...state,
        });
    }
    cleanState() {
        this.booksDataSource.next(this.initialDataSource);
    }
}

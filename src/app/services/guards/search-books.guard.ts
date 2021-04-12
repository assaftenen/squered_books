import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookStore } from 'src/app/store/data-source';

@Injectable({
  providedIn: 'root',
})
export class SearchBooksGuard implements CanActivate {
  constructor(private store: BookStore, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.store.value?.userName) {
      this.router.navigate(['welcome']);
      return false;
    }
    return true;
  }
}

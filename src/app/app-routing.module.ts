import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './containers/search/search/search.component';
import { SearchBooksGuard } from './services/guards/search-books.guard';
const routes: Routes = [
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./containers/wish-list/wish-list.module').then(
        (m) => m.WishListModule
      ),
    canActivate: [SearchBooksGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    component: SearchComponent,
    canActivate: [SearchBooksGuard],
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./containers/welcome/welcome.module').then(
        (m) => m.WelcomeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

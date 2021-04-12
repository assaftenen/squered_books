import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './containers/search/search/search.component';
  

const routes: Routes = [
  { path: 'wishlist',
   loadChildren: () => import('./containers/wish-list/wish-list.module').then(m => m.WishListModule) },
{ path: 'search',
 loadChildren: () => import('./containers/search/search.module').then(m => m.SearchModule) },
 {
  path: '',
  pathMatch: 'full',
  component: SearchComponent
},
  { path: 'welcome', loadChildren: () => import('./containers/welcome/welcome.module').then(m => m.WelcomeModule) },]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

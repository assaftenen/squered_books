import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { SearchTitleComponent } from './search/components/search-title/search-title.component';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { SearchListComponent } from './search/components/search-list/search-list.component';




@NgModule({
  declarations: [SearchComponent, SearchTitleComponent, SearchInputComponent, SearchListComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  entryComponents: [SearchComponent]
})
export class SearchModule { }

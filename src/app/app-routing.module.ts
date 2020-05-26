import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AddEditComponent } from './add-edit/add-edit.component';


const routes: Routes = [{
  path: 'search',
  component: SearchComponent
}, {
  path: 'add',
  component: AddEditComponent
}, {
  path: 'edit',
  component: AddEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

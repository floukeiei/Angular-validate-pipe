import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { PanelModule } from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';

import {InputTextModule} from 'primeng/inputtext';
import { ResultListComponent } from './result-list/result-list.component';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { GenderPipe } from '../pipes/gender.pipe';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@NgModule({
  declarations: [SearchComponent, ResultListComponent ,
    GenderPipe],
  imports: [
    CommonModule,
    PanelModule,
    DropdownModule,
    FormsModule,
    RadioButtonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ConfirmDialogModule
  ],
  exports: [SearchComponent],
  providers: [ConfirmationService]
})
export class SearchModule { }

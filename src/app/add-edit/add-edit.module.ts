import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddEditComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    RadioButtonModule,
    InputTextModule,
    DropdownModule,
    PanelModule,
    ReactiveFormsModule
  ]
})
export class AddEditModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { SearchModule } from './search/search.module';
import {PanelModule} from 'primeng/panel';
import { HttpClientModule} from '@angular/common/http';
import { AddEditModule } from './add-edit/add-edit.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SearchModule,
    HttpClientModule,
    AddEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

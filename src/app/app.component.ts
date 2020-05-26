import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirst-project';

  onValueChange(event) {
    console.warn( 'fromAppComponent', event);
  }
}

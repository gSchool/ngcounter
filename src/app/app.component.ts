import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // These properties can be used in templates.
  // When you launch the application, where can you see this title?
  title = 'Angular Counter';
}

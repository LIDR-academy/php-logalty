import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IdeaValidatorComponent } from './components/ideaValidator/IdeaValidator.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IdeaValidatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

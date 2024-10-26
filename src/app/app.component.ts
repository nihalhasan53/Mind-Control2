import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { RandomGeneratorComponent } from './randomgenerator/randomgenerator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[RouterOutlet]
})
export class AppComponent {
}

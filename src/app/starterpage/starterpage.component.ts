import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-starterpage',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './starterpage.component.html',
  styleUrls: ['./starterpage.component.css']
})
export class StarterPageComponent {
  constructor(private router: Router) {}

  navigateToApp() {
    this.router.navigate(['/random']);
  }
}

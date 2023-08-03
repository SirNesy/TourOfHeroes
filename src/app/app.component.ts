import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Tour of Heroes';
  constructor(private router: Router) {}
  home(): void {
    this.router.navigate(['/dashboard']); // implementing the feature of router
  }
}

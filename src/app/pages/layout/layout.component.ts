import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private authenticationService:AuthenticationService,private router: Router) {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

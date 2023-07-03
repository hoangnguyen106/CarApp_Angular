import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  showLogout = true;
  ngOnInit(): void {
  }

  logout() {
    this.showLogout = false;
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

import { AuthService } from 'src/app/core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router){}

  isLoggedIn = false;
  userName = "";
  menuOpen: boolean = false;

  ngOnInit(): void {
      this.authService.isLoggedIn$.subscribe(value => {
        this.isLoggedIn = value;
      })

      this.authService.user$.subscribe(user => {
        this.userName = user?.firstName + " " + user?.lastName;
      })
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goToProfile(): void {
    this.menuOpen = false;
    this.router.navigate(['/userProfile']);
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.menuOpen = false;
    this.router.navigate(['/']);
  }

}

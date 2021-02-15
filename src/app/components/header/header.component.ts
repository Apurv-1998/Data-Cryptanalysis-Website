import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isVerified: string;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  //Register User-button
  register() {
    this.router.navigate(['/register']);
  }

  //Login User-button
  login() {
    this.router.navigate(['/login']);
  }

  //Logout-user button
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }
  //Check-Local storage
  checkLocalStorage(): boolean {
    this.isVerified = localStorage.getItem("VERIFIED_USER");
    return this.isVerified === 'true';
  }
}

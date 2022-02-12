import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navItems } from '../../../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = false;

  constructor(private router: Router) {}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  ngOnInit(): void {}

  onLogout(): void {
    this.router.navigateByUrl('/login');
  }
}

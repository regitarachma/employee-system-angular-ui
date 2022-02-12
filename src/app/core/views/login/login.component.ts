import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogin = {
    username: '',
    password: ''
  };
  wrongPassword: boolean = false;

  constructor(
    private router: Router,
  ) {}

  onLogin(loginForm: NgForm) {
    this.wrongPassword = false;
    if (!loginForm.form.valid) {
      return;
    }

    if (this.userLogin.username === 'admin' && this.userLogin.password === 'admin') {
      this.router.navigateByUrl('/dashboard');
      this.wrongPassword = false;
    } else {
      this.wrongPassword = true;
    }
  }

  ngOnInit(): void {
    // if (this.authService.isAuthenticated()) {
    //   this.authService.logout();
    // }
  }
}

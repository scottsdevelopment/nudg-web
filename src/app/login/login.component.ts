import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('token', ''); // reset password
  }

  login(f: NgForm) {
    if (f.value.username == 'admin' && f.value.password == 'admin') {
      localStorage.setItem('token', 'auth');
      this.router.navigate(['']);
    }
  }

}

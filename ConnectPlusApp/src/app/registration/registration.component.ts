import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firstname = '';
  cpassword = '';
  lastname = '';
  email = '';
  password = '';
  data;
  uri = 'http://localhost:4000/api/registration';

  constructor(private router: Router, private httpclient: HttpClient) {}

  ngOnInit() {
  }

  addUser() {
    const user = {
      firstName: this.firstname,
      lastName: this.lastname,
      emailID: this.email,
      password: this.password,
      confirmPassword: this.cpassword
    };
    console.log(user);
    this.httpclient.post(`${this.uri}`, user).subscribe(data =>{
      this.router.navigate(['/login']);
    });
  }
}

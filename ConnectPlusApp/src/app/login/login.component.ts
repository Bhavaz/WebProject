import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailID = '';
  password = '';
  InvalidUser = false;
  constructor(private router: Router, private httpclient: HttpClient) { }
  uri = 'http://localhost:4000/login'

  ngOnInit() {
  }

  userLogin() {
    const user = {
      emailID: this.emailID,
      password: this.password
    };
    localStorage.setItem('LoggedinEmailId', user.emailID );
    this.httpclient.post(`${this.uri}`, user).subscribe( (data) => {
      console.log(data);
      // @ts-ignore
      if (data.message === 'Success') {
        console.log('after service call', data);
        this.router.navigate(['./connect']);
        // @ts-ignore
        console.log(data.message);
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });
  }

}

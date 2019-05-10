import { Component, OnInit } from '@angular/core';
import {Socket} from 'ng-socket-io';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  uri = 'http://localhost:4000/api/messenger';
  userName: any;
  message: any;
  receivedMessage: any;
  activeUsers: any;
  toUser: any;
  showBox: boolean;
  constructor( private  socket: Socket, private router: Router, private http: HttpClient) {
    this.setUserName();
    this.socket.on('Message', (data) => {
      this.receivedMessage = data.message;
    });
    this.socket.on('UpdatedUsers', (data) => {
      data = data.filter(e => e !== localStorage.getItem('LoggedinEmailId'))
      this.activeUsers = data;
    });
    this.getUsers();
  }

  ngOnInit() {
  }

  setUserName() {
    this.socket.connect();
    this.socket.emit('set-username', localStorage.getItem('LoggedinEmailId'));
  }
  showMessageBox(user) {
    this.toUser = user;
    this.showBox = true;
  }
  sendMessage() {
    const data = {
      from: this.userName,
      message: this.message,
      to: this.toUser
    };

    this.http.post(`${this.uri}/sendmessage`, data).subscribe( res => {
      // console.log(res);
    });
  }

  getUsers() {
    this.http.get(`${this.uri}/getusers`).subscribe( res => {
      this.activeUsers = res;
    });
  }

}

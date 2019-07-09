import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  username:any;
  password:any;

  ngOnInit() {
  }

  loginUser(){
    console.log(this.username,this.password)
    var logData = {'username': this.username, 'password': this.password };
    return this.http.post('http://127.0.0.1:8000/api/login',logData).subscribe(
      data => console.log(data)
    );
  }

}

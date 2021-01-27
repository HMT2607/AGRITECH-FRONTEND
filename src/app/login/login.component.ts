import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(uname:string, pass:string){
    // button click handler
    this.http.post("http://127.0.0.1:8000/auth/token/login/",
    {
        "username": uname,
        "password": pass
    })
    .subscribe(
        (val) => {
            console.log(val);
            sessionStorage.setItem('id', JSON.stringify(val));
            location.href = "./";
        },
        response => {
            console.log("POST call in error");
        },
        () => {
            console.log("Request completed.");
        });
    }
}



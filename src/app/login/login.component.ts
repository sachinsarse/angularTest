import { Component, OnInit } from '@angular/core';
import { Login }    from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login("", "");
  submitted = false;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
    if(this.model.userName =="Eternus" && this.model.password=="123"){
    this._router.navigate(['contact']);
    }
  }
}

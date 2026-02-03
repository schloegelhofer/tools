import { AuthService } from './../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})

export class UserloginComponent implements OnInit{

    form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    constructor(private authservice: AuthService, private router: Router) {}

    ngOnInit(): void {

    }

    onSubmit(){
      console.log("Formular wurde ausgefüllt");
      this.onLogin();
    }

    reset(){
      this.form.reset;
    }

    onLogin(): void {
      if(this.form.controls.firstName.value !== null && this.form.controls.lastName.value !== null){
        this.authservice.login({ firstName: this.form.controls.firstName?.value, lastName: this.form.controls.lastName.value });
        this.router.navigateByUrl('/userName');
      }

    }

  }


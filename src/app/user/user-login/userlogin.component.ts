import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


export interface User {
  name: string;
  passwort: string;
}

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})

export class UserloginComponent implements OnInit{

    form: FormGroup;

    constructor() {
      this.form = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      });
    }

    ngOnInit(): void {

    }


    onSubmit(){
      console.log("Formular wurde ausgefüllt");

    }

    reset(){
      this.form.reset;
    }
  }


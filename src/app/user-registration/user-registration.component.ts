import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

export interface User {
  name: string;
  passwort: string;
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  form: FormGroup;

    constructor() {
      this.form = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        passwordConfirm: new FormControl('', [Validators.required]),
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors} from '@angular/forms';
import { IdNumberValidator } from '../validators/idnumber.validator'
import { Router } from '@angular/router';
import { RouteInfo } from '../models/routeinfo.model';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm! : FormGroup;
  isSubmitted : boolean = false;

  constructor(private fbuilder : FormBuilder, private router : Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fbuilder.group(
      {
        passwordControl : ['', this.nonEmptyName],
        idnumberControl : ['', [Validators.required, IdNumberValidator.saIdValidator]],
        otpControl: ['', Validators.required]
      }
    );
  }

  onSubmitLoginDetails(submittedForm : FormGroup) {
    this.isSubmitted = true;
    if (!submittedForm.invalid) {
    }
  }


  nonEmptyName (control : FormControl) : ValidationErrors|null {
    if (control.value.trim() == "") {
      let resp = {
        'required' : true
      };
      return resp;
    }
    return null;
  }

}

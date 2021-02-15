import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserPayload } from 'src/app/common/user-payload';
import { UserRest } from 'src/app/common/user-rest';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  payload: UserPayload;
  response: UserRest;
  userId: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private toaster: ToastrService) { 


    //Defining the payload
    this.payload = {
      'name':'',
      'email':'',
      'password':'',
      'dob':null
    };

  }

  ngOnInit(): void {

    //Initialize the form-builder
    this.registerForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      pass: ['',[Validators.required]],
      dob: ['',[Validators.required]]
    });

  }

  onSubmit() {

    //Copy the form-data to the payload
    this.payload.name = this.registerForm.get('name').value;
    this.payload.email = this.registerForm.get('email').value;
    this.payload.password = this.registerForm.get('pass').value;
    this.payload.dob = this.registerForm.get('dob').value;

    //Passing the payload to the service
    this.userService.registerUser(this.payload).subscribe(

      data => {
        console.log('Response Received '+JSON.stringify(data));
        this.response = data;
        this.router.navigate(['/login']);
        this.toaster.success("Login Successful!!!");
      },
      error => {
        this.router.navigateByUrl('');
        this.toaster.error('Try Again!!!');

      }
    );
  }

  discard() {
    this.router.navigate(['/register']);
    this.toaster.info("Info Discarded!!!");
  }

}

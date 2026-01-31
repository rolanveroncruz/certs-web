import { Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {TextFieldModule}   from '@angular/cdk/text-field';
import {HttpClient} from '@angular/common/http';


type Result = {
  status: string;
  message: string;
}
type ContactUsForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    MatButtonModule,
    TextFieldModule,
  ],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl(''),
    message: new FormControl(''),
  })
  disabledButton = true;

  constructor( private http: HttpClient) {
    let data = {
      "user": "admin",
      "request": "allow"
    };
    this.http.post<Result>('/api/postping', data).subscribe( (result:Result) =>{
      if (result.status == 'OK'){
        console.log("postping OK, message is '",result.message, "'");
        this.disabledButton = false;
      }
    })
  }

  onSubmit(){
    this.disabledButton = true;
    let contactForm: ContactUsForm = {
      firstName: this.contactForm.value.firstName || " ",
      lastName: this.contactForm.value.lastName || " ",
      email: this.contactForm.value.email || " ",
      phone: this.contactForm.value.phone ||" ",
      company: this.contactForm.value.company || " ",
      message: this.contactForm.value.message || " ",
    }
    this.http.post<Result>('/api/contactus', contactForm).subscribe( (result:Result) =>{
      if (result.status == 'OK'){
        console.log("postping OK, message is '",result.message, "'");
        this.disabledButton = false;
      }

    })

  }

}

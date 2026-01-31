import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';

// ✅ NETLIFY: removed HttpClient import (no backend calls needed)

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
  });

  // ✅ NETLIFY: removed constructor + onSubmit()
  // The form now submits via normal HTML POST handled by Netlify Forms.
}

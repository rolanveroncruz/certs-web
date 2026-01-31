import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';

type SubmitState = 'idle' | 'success' | 'error';

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
  // ✅ NEW: UI state for feedback
  submitting = signal(false);
  submitState = signal<SubmitState>('idle');

  // ✅ CHANGE: add validators for better UX
  contactForm = new FormGroup({
    firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    phone: new FormControl('', { nonNullable: true }),
    company: new FormControl('', { nonNullable: true }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  // ✅ NEW: Option B submit handler
  async onSubmitNetlify(): Promise<void> {
    // Reset status message each attempt
    this.submitState.set('idle');

    if (this.submitting()) return;

    // Trigger validation messages
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    try {
      // ✅ CHANGE: Netlify expects application/x-www-form-urlencoded to "/"
      const formName = 'contact-us';
      const payload: Record<string, string> = {
        'form-name': formName,
        firstName: this.contactForm.controls.firstName.value,
        lastName: this.contactForm.controls.lastName.value,
        email: this.contactForm.controls.email.value,
        phone: this.contactForm.controls.phone.value,
        company: this.contactForm.controls.company.value,
        message: this.contactForm.controls.message.value,
      };

      const body = new URLSearchParams(payload).toString();

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      // Netlify often returns 200/302 depending on config, but if it’s not ok, treat as error.
      if (!res.ok) {
        throw new Error(`Netlify form POST failed: ${res.status}`);
      }

      // ✅ NEW: success feedback + reset
      this.submitState.set('success');
      this.contactForm.reset({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

    } catch (err) {
      console.error(err);
      this.submitState.set('error');
    } finally {
      this.submitting.set(false);
    }
  }
}

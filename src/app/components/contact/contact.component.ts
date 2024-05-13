import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactform: FormGroup;
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.contactform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  hasError(controlName: string, errorType: string) {
    return (
      this.contactform.get(controlName)?.hasError(errorType) &&
      this.contactform.get(controlName)?.touched
    );
  }

  onSubmit() {
    console.log(this.contactform.value);
    this.contactform.reset();
  }
}

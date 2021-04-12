import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookStore } from 'src/app/store/data-source';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  loginForm: FormGroup;
  nameRegex = /^[a-zA-Z]+$/;
  constructor(private formBuilder: FormBuilder, private store: BookStore, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(this.nameRegex)]],
    });
  }
  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.store.set('userName', this.loginForm.value.name);
    this.router.navigate(['/'])
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'IX-login';
  options: AnimationOptions
  LoginForm: FormGroup | any;
  constructor(private fb: FormBuilder) {
    this.options = {
      path:'assets/working-man.json'
    }
  }
  ngOnInit() {
    this.LoginForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.minLength(8), Validators.maxLength(11)]]
    });
  }
  submit() {
    alert('watch the result in console')
    console.log(this.LoginForm.value)
  }
}

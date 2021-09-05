import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    acno: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[0-9]*'),
      ],
    ],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    pwd: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z0-9]*'),
      ],
    ],
  });
  constructor(
    private ds: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  register() {
    alert('Regsiter clicked');

    if (this.registerForm.valid) {
      console.log(this.registerForm);
      var uname = this.registerForm.value.uname;
      var acno = this.registerForm.value.acno;
      var pwd = this.registerForm.value.pwd;

      this.ds.register(acno, uname, pwd).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            this.router.navigateByUrl('');
          }
        },
        (result) => {
          alert(result.error.message);
          this.router.navigateByUrl('');
        }
      );
    } else {
      alert('Invalid Form');
    }
  }
}

import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user = this.ds.currentUser;
  userName: any;
  acno: any;

  depositForm = this.fb.group({
    accno: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[0-9]*'),
      ],
    ],
    pwd: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z0-9]*'),
      ],
    ],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });

  withdrawForm = this.fb.group({
    accno1: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[0-9]*'),
      ],
    ],
    pwd1: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z0-9]*'),
      ],
    ],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });

  constructor(private ds: DataService, private fb: FormBuilder,private router: Router) {
    this.userName = localStorage.getItem('userName');
  }

  ngOnInit(): void {}

  deposit() {
    if (this.depositForm.valid) {
      var accno = this.depositForm.value.accno;
      var pwd = this.depositForm.value.pwd;
      var amount = this.depositForm.value.amount;

      this.ds.deposit(accno, pwd, amount).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Invalid Form');
    }
  }

  withdraw() {
    if (this.withdrawForm.valid) {
      var accno1 = this.withdrawForm.value.accno1;
      var pwd1 = this.withdrawForm.value.pwd1;
      var amount1 = this.withdrawForm.value.amount1;

      this.ds.withdraw(accno1, pwd1, amount1).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Invalid Form');
    }
  }
  deleteAcc() {
    this.acno = localStorage.getItem('currentAcc');
    console.log(this.acno);
  }
  onDelete(event) {
    // alert(event)
    this.ds.deleteAcc(event).subscribe(
      (result: any) => {
        if (result) {
          alert(result.message);
          this.router.navigateByUrl("")

        }
      },
      (result) => {
        alert(result.error.message);
      }
    );
  }
  onCancel(){
    this.acno=""
  }
}

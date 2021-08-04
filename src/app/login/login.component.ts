import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Banking Partner"
  // accnumber="Please Enter you Account Number"
  accno = "Please Enter you Account Number"
  pwd = ""

  loginForm = this.fb.group({
    accno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9a-zA-Z]*')]]
  })


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  login() {
    // alert("Button clicked")
    if (this.loginForm.valid) {
      var acno = this.loginForm.value.accno
      var pswd = this.loginForm.value.pwd


      var result = this.ds.login(acno, pswd)
      if (result) {
        alert("Login Successful")
        this.router.navigateByUrl('dashboard')
      }
      else {
        alert("Invalid User")
        this.router.navigateByUrl('')
      }

    }
    else
    {
      alert("Invalid Form")
    }


  }

  // login(a_no:any,pwd:any){
  //   // alert("Button clicked")
  //   // console.log(ano.value);

  //   var acno=a_no.value
  //   var pswd=pwd.value
  //   let accDetails=this.user

  //   if(acno in accDetails){
  //     if(pswd==accDetails[acno]["password"]){
  //       alert("Login Successful")
  //     }
  //     else{
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else
  //   {
  //     alert("Invalid User")
  //   }
  // }

  // accChange(event: any){
  //   // console.log(event.target.value);
  //   this.accno=event.target.value


  // }

  // pwdChange(event:any){
  //   // console.log(event.target.value);
  //   this.pwd=event.target.value

  // }


}

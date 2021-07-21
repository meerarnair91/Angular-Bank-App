import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="Your Banking Partner"
accnumber="Please Enter you Account Number"
accno=""
pwd=""
  user:any={
    1001:{acno:1001,uname:"Ram",password:"userone",balance:5000},
    1002:{acno:1002,uname:"Rahul",password:"usertwo",balance:10000},
    1003:{acno:1003,uname:"Revathy",password:"userthree",balance:8000},
    1004:{acno:1004,uname:"Ravi",password:"userfour",balance:4000},
    1005:{acno:1005,uname:"Rohit",password:"userfive",balance:7000}
    

  }

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    // alert("Button clicked")
    var acno=this.accno
    var pswd=this.pwd
    let accDetails=this.user

    if(acno in accDetails){
      if(pswd==accDetails[acno]["password"]){
        alert("Login Successful")
      }
      else{
        alert("Incorrect Password")
      }
    }
    else
    {
      alert("Invalid User")
    }
  }

  accChange(event: any){
    // console.log(event.target.value);
    this.accno=event.target.value

    
  }
  
  pwdChange(event:any){
    // console.log(event.target.value);
    this.pwd=event.target.value
    
  }


}

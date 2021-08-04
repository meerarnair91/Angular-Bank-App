import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser = ""
  currentAcc = ""

  user: any = {
    1001: { acno: 1001, uname: "Ram", password: "userone", balance: 5000, transaction: [] },
    1002: { acno: 1002, uname: "Rahul", password: "usertwo", balance: 10000, transaction: [] },
    1003: { acno: 1003, uname: "Revathy", password: "userthree", balance: 8000, transaction: [] },
    1004: { acno: 1004, uname: "Ravi", password: "userfour", balance: 4000, transaction: [] },
    1005: { acno: 1005, uname: "Rohit", password: "userfive", balance: 7000, transaction: [] }
  }
  static deposit: any;
  static withdraw: any;

  constructor() {
    this.getDetails()
  }

  saveDetails() {
    localStorage.setItem("user", JSON.stringify(this.user))

    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }

    if (this.currentAcc) {
      localStorage.setItem("currentAcc", JSON.stringify(this.currentAcc))
    }
  }

  getDetails() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"))
    }

    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    }

    if (localStorage.getItem("currentAcc")) {
      this.currentAcc = JSON.parse(localStorage.getItem("currentAcc"))
    }

  }

  getTransaction() {
    return this.user[this.currentAcc].transaction
  }


  login(acno: any, pswd: any) {
    let accDetails = this.user
    if (acno in accDetails) {
      if (pswd == accDetails[acno]["password"]) {
        this.currentUser = accDetails[acno]["uname"]
        this.currentAcc=acno
        this.saveDetails()
        return true

      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {

      return false
    }
  }

  register(acno: any, uname: any, password: any) {
    let accDetails = this.user
    if (acno in accDetails) {

      return false
    }
    else {
      accDetails[acno] = {
        acno,
        uname,
        password,
        balance: 0,
        transaction: []
      }
      this.saveDetails()
      return true
    }
  }

  deposit(acno: any, pwd: any, amt: any) {
    let accDetails = this.user
    let amount = parseInt(amt)

    if (acno in accDetails) {
      if (pwd == accDetails[acno]["password"]) {
        accDetails[acno]["balance"] += amount
        accDetails[acno].transaction.push(
          {
            amount: amount,
            type: "CREDIT"
          }
        )
        this.saveDetails()
        return accDetails[acno]["balance"]
      }
      else {
        alert("Incorrect password")
        return false
      }
    }

    else {
      alert("User Not Found")
      return false
    }
  }

  withdraw(acno: any, pwd: any, amt: any) {
    let accDetails = this.user
    let amount = parseInt(amt)

    if (acno in accDetails) {
      if (pwd == accDetails[acno]["password"]) {
        if (accDetails[acno]["balance"] > amount) {
          accDetails[acno]["balance"] -= amount
          accDetails[acno].transaction.push(
            {
              amount: amount,
              type: "DEBIT"
            }
          )
          this.saveDetails()
          return accDetails[acno]["balance"]
        }

        else {
          alert("Insufficient balance")
          return false
        }
      }
      else {
        alert("Incorrect password")
        return false
      }
    }

    else {
      alert("User Not Found")
      return false
    }
  }


}




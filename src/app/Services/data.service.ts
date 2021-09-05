import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  withCredentials: true,
};
@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentUser = '';
  currentAcc = '';

  user: any = {
    1001: {
      acno: 1001,
      uname: 'Ram',
      password: 'userone',
      balance: 5000,
      transaction: [],
    },
    1002: {
      acno: 1002,
      uname: 'Rahul',
      password: 'usertwo',
      balance: 10000,
      transaction: [],
    },
    1003: {
      acno: 1003,
      uname: 'Revathy',
      password: 'userthree',
      balance: 8000,
      transaction: [],
    },
    1004: {
      acno: 1004,
      uname: 'Ravi',
      password: 'userfour',
      balance: 4000,
      transaction: [],
    },
    1005: {
      acno: 1005,
      uname: 'Rohit',
      password: 'userfive',
      balance: 7000,
      transaction: [],
    },
  };
  static deposit: any;
  static withdraw: any;

  constructor(private http: HttpClient) {
    // this.getDetails()
  }

  saveDetails() {
    localStorage.setItem('user', JSON.stringify(this.user));

    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }

    if (this.currentAcc) {
      localStorage.setItem('currentAcc', JSON.stringify(this.currentAcc));
    }
  }

  getDetails() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    if (localStorage.getItem('currentAcc')) {
      this.currentAcc = JSON.parse(localStorage.getItem('currentAcc'));
    }
  }

  getTransaction(acno: any) {
    const data = {
      acno,
    };
    return this.http.post('http://localhost:3000/transaction', data, options);
  }

  login(acno: any, pswd: any) {
    const data = {
      acno,
      pswd,
    };
    return this.http.post('http://localhost:3000/login', data, options);
  }

  register(acno: any, uname: any, password: any) {
    const data = {
      acno,
      uname,
      password,
    };
    return this.http.post('http://localhost:3000/register', data);
  }

  deposit(acno: any, pwd: any, amt: any) {
    const data = {
      acno,
      pwd,
      amt,
    };
    return this.http.post('http://localhost:3000/deposit', data, options);
  }

  withdraw(acno: any, pwd: any, amt: any) {
    const data = {
      acno,
      pwd,
      amt,
    };
    return this.http.post('http://localhost:3000/withdraw', data, options);
  }
  deleteAcc(acno: any) {
    return this.http.delete('http://localhost:3000/deleteAcc/' + acno, options);
  }
}

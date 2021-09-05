import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  acno:any;
  transaction=[]

  constructor(private ds:DataService) {
    this.acno=localStorage.getItem("currentAcc");
    this.ds.getTransaction(this.acno)
    .subscribe((result:any)=>{
      if(result){
        this.transaction=result.transaction
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
  }

  ngOnInit(): void {
  }

}

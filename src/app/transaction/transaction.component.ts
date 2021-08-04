import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction=[]

  constructor(private ds:DataService) {
    this.transaction=this.ds.getTransaction()
    console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}

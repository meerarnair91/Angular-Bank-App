import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {
@Input() item:any;
@Output() onDelete=new EventEmitter;
@Output() onCancel=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    alert("Cancelling...")
    this.onCancel.emit(this.item)
  }
  deleteAcc(){
  this.onDelete.emit()
  }

}

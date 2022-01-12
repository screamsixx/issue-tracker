import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() issueNo:number | null = null;
  @Input() title: string | null=null;
  @Output() confirm = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  agree(){
    this.confirm.emit(true);
    this.issueNo = null;
    
  }
  disagree(){
    this.confirm.emit(false);
    this.issueNo = null;
  }

}

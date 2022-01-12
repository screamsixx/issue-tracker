import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';

//import { EventEmitter } from 'stream';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-modify',
  templateUrl: './issue-modify.component.html',
  styleUrls: ['./issue-modify.component.css']
})
export class IssueModifyComponent implements OnInit {
  issueForm2: FormGroup | undefined
  
  @Input() issueNo: number | null=null;
  @Input() title: string | null=null;
  @Output() formClose = new EventEmitter();
  @Output() confirm= new EventEmitter<boolean>();

  

  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm2 = this.builder.group({
      title: ['', Validators.required],
      description: [''],
      priority: [''],
      type: ['',]
    });
  }

  modiIssue(){
    if (this.issueForm2 && this.issueForm2.invalid) {
      this.issueForm2.markAllAsTouched();
      return;
    }
    //this.issueService.createIssue(this.issueForm2?.value);
    this.formClose.emit();
  }

  mod2(){
    this.confirm.emit(true);
    
    
  }
  

}

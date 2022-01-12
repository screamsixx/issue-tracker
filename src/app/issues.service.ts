import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';
@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issue: Issue[] = issues;
  constructor() { }
  getPendingIssues(): Issue[] {
    return this.issue.filter((issue) => !issue.completed);
  }
  createIssue(issue: Issue){
    issue.issueNo = this.issue.length + 1;
    this.issue.push(issue);
  }
  completeIssue(issue: Issue){
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date(),
    };
    const index = this.issue.findIndex((i) => i === issue);
    this.issue[index] = selectedIssue;
  }

  getSuggestions(title: string): Issue[] {
    if (title.length > 3) {
      return this.issue.filter(issue =>
        issue.title.indexOf(title) !== -1)
    }
    return [];
  }
  modIssue(issue: Issue){
    issue.issueNo = this.issue.length + 1;
    this.issue.push(issue);
  }
}

import { Component, OnInit } from '@angular/core';

import { QuestionService } from './service/question.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="arr.length > 0">
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `
})
export class AppComponent implements OnInit {
  public arr: any = []
  questions$: Observable<QuestionBase<any>[]>;

  constructor(private service: QuestionService, private httpService: HttpService) {
    
  }

  ngOnInit(): void {
    this.httpService.getFormData().subscribe(res => {
      this.arr = res
      this.questions$ = this.service.getQuestions(res);
    });
  }
}
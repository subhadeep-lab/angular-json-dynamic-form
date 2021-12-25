import { Injectable } from '@angular/core';
import { QuestionBase } from '../question-base';
import { of } from 'rxjs';


@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  private data: any = []
  constructor() { }


  getQuestions(arr) {
    // console.log(arr)
    arr.forEach(element => {
      this.data.push(new QuestionBase(element))
    });
    // console.log(this.arr)
    const questions: QuestionBase<string>[] = arr

    return of(questions.sort((a, b) => a.order - b.order));
  }

  getFormData() {
    
  }
}
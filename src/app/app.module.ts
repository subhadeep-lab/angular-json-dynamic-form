import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { QuestionService } from './service/question.service';


@NgModule({
  imports: [ 
    BrowserModule, 
    HttpClientModule,
    ReactiveFormsModule
   ],
  declarations: [ 
    AppComponent, 
    DynamicFormComponent, 
    DynamicFormQuestionComponent
  ],
  providers: [QuestionService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
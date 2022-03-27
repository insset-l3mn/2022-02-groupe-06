import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css'],
})
export class AddQuestionsComponent implements OnInit {
  questionForm?: FormGroup;

  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      question: [null, Validators.required],
      choix: this.fb.group({
        reponse: [null, Validators.required],
        correct: [null, Validators.required],
        id: [null, Validators.required],
      }),
    });
  }

  get f() {
    return this.questionForm?.controls;
  }

  ngOnInit(): void {}

  addQuestions() {
    console.log(this.questionForm?.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/core/services/question.service';
import { interval, of } from 'rxjs';
import { ReponseService } from 'src/app/core/services/reponse.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-question',
  templateUrl: './liste-question.component.html',
  styleUrls: ['./liste-question.component.css'],
})
export class ListeQuestionComponent implements OnInit {
  questions: any;
  choix: any[] = [];
  QuestionForm!: FormGroup;
  progress: string = '0';
  inerval$: any;
  currentquestion = 0;
  point: any = 0;
  timer = 120;
  length: any;
  check = false;
  isQuizeOver = false;
  error: any;
  constructor(
    private questionsS: QuestionService,
    private reponseS: ReponseService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getQuestions();
    this.startTiming();
  }

  getQuestions() {
    this.questionsS.getAll().subscribe((res: any) => {
      this.check = true;
      this.length = res.length;
      this.questions = res;
      console.log('questions', this.questions);
      for (let i in res) this.choix.push(JSON.parse(res[i].choix));
      console.log('choix', this.choix);
    });
  }

  previous() {
    this.currentquestion--;
    this.getProgressPercent();

    // this.getQuestions();
  }

  next() {
    this.currentquestion++;
    this.getProgressPercent();
    // this.getQuestions();
  }
  correctanswer = 0;
  wronganswer = 0;
  AnswersForm: any[] = [];
  answer(idquestion: any, choix: any, idreponse: any) {
    if (idquestion === this.length) {
      this.isQuizeOver = true;
      console.log(this.point);

      this.stopTiming();
    }
    if (choix == true) {
      this.point += 10;
      this.correctanswer++;
      setTimeout(() => {
        this.currentquestion++;
        this.getProgressPercent();
        this.AnswersForm.push({ idquestion, idreponse });
        console.log(this.AnswersForm);
      }, 1000);

      console.log(idquestion, idreponse);
    } else {
      this.point = 0;
      this.wronganswer++;
      setTimeout(() => {
        this.currentquestion++;
        this.AnswersForm.push({ idquestion, choix });
        console.log(this.AnswersForm);
        this.getProgressPercent();
      }, 1000);
    }
  }

  getProgressPercent() {
    this.progress = ((this.currentquestion / this.length) * 108).toString();
    return this.progress;
  }

  startTiming() {
    this.inerval$ = interval(1000).subscribe((res) => {
      this.timer--;
      if (this.timer == 0) {
        this.currentquestion++;
        this.timer = 120;
        this.point = -10;
      }
    });

    setTimeout(() => {
      this.inerval$.unsubscribe();
    }, 60000);
  }

  stopTiming() {
    this.inerval$.unsubscribe();
    this.timer = 0;
  }

  resertTiming() {
    this.stopTiming;
    this.timer = 60;
    this.startTiming;
  }

  addAnswers() {
    // console.log(this.AnswersForm);
     this.route.navigate(['graphe']);
    // this.reponseS.addReponse(this.AnswersForm).subscribe((res: any) => {
    //   Swal.fire({
    //     title: 'Bien Ajouter!!',
    //     text: 'Vos réponse ont été ajouté avec succès',
    //     icon: 'success',
    //   });
    // }),
    //   (error: string) => {
    //     this.error = error;
    //     console.error(this.error);
    //   };
  }



}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormateurService } from 'src/app/core/services/formateur.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css'],
})
export class AddFormationComponent implements OnInit {
  formationForm!: FormGroup;
  competence: any;
  constructor(private formateurS: FormateurService) {
    this.formationForm = new FormGroup({
      nomformation: new FormControl(null, [Validators.required]),
      competence: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getCompetence();
  }

  getCompetence() {
    this.formateurS.getCompetence().subscribe((res: any) => {
      this.competence = res;
    });
  }

  addFormation() {
    console.log(this.formationForm.value);
    this.formateurS
      .addFormation(this.formationForm.value)
      .subscribe((res: any) => {
        this.competence = res;
      });
  }

  get f() {
    return this.formationForm.controls;
  }
}

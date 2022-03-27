import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormateurService } from 'src/app/core/services/formateur.service';

@Component({
  selector: 'app-add-chapitre',
  templateUrl: './add-chapitre.component.html',
  styleUrls: ['./add-chapitre.component.css'],
})
export class AddChapitreComponent implements OnInit {
  chapitreForm?: FormGroup;
  formation: any;
  constructor(private formateurS: FormateurService) {
    this.chapitreForm = new FormGroup({
      label: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
      id_formation: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getFormation();
  }

  get f() {
    return this.chapitreForm?.controls;
  }

  getFormation() {
    this.formateurS.getFormation().subscribe((res: any) => {
      this.formation = res;
      console.log(this.formation);
    });
  }
  addChapitre() {
    console.log(this?.chapitreForm?.value);
  }
}

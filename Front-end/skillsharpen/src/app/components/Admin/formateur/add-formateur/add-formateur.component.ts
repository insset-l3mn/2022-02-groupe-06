import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css'],
})
export class AddFormateurComponent implements OnInit {
  addFormateurForm?: FormGroup;

  constructor() {
    this.addFormateurForm = new FormGroup({
      nom: new FormControl(null, [Validators.required]),
      prenom: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(this.generateRandPassword()),
    });
  }

  generateRandPassword() {}

  ngOnInit(): void {}

  addFormateur() {}
}

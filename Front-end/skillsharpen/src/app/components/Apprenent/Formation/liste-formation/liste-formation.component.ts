import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/core/services/formateur.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css'],
})
export class ListeFormationComponent implements OnInit {
  formations: any;
  doc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  constructor(private formateurS: FormateurService) {}

  ngOnInit(): void {
    this.formateurS.getchapitre().subscribe((res: any) => {
      this.formations = res;
    });
  }
}

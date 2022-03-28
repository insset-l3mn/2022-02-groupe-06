import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { FormateurService } from 'src/app/core/services/formateur.service';
@Component({
  selector: 'app-liste-chapitre',
  templateUrl: './liste-chapitre.component.html',
  styleUrls: ['./liste-chapitre.component.css'],
})
export class ListeChapitreComponent implements OnInit {
  constructor(private formationS: FormateurService) {}
  rowData: any;
  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'label' },
    { field: 'description' },
    { field: 'content' },
  ];
  ngOnInit(): void {
    this.formationS.getchapitre().subscribe((res: any) => {
      this.rowData = res;
    });
  }
}

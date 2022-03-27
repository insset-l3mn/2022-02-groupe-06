import { Component, OnInit } from '@angular/core';
import { SousdomaineService } from 'src/app/core/services/sousdomaine.service';

@Component({
  selector: 'app-list-sous-domaine',
  templateUrl: './list-sous-domaine.component.html',
  styleUrls: ['./list-sous-domaine.component.css'],
})
export class ListSousDomaineComponent implements OnInit {
  sousdomaine?: any[];

  constructor(private sousDOmaineS: SousdomaineService) {}

  ngOnInit(): void {
    this.getSousDomaine();
  }

  getSousDomaine() {
    this.sousDOmaineS.getAll().subscribe((res: any) => {
      this.sousdomaine = res;
    });
  }
}

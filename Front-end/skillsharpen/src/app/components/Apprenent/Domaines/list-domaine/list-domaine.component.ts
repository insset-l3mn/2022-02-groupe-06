import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/core/services/domaine.service';

@Component({
  selector: 'list-domaine',
  templateUrl: './list-domaine.component.html',
  styleUrls: ['./list-domaine.component.css'],
})
export class ListDomaineComponent implements OnInit {
  domaine?: any;
  constructor(private domaineS: DomaineService) {}

  ngOnInit(): void {
    this.getDomaine();
  }

  getDomaine() {
    this.domaineS.getAll().subscribe((res: any) => {
      // this.domaine = JSON.parse(res[0].choix);
      this.domaine = res;
      console.log(this.domaine);
    });
  }

  getDomaineClickedId(id: number) {
    console.log(id);
  }
}

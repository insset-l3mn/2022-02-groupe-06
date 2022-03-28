import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGraphComponent } from '../graph/list-graph/list-graph.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShearedRoutingModule {}

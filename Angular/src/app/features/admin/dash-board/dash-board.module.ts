import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashBoardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashBoardRoutingModule,
    ChartsModule,
    FormsModule
  ]
})
export class DashBoardModule { }

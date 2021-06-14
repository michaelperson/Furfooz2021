import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionRoutingModule } from './mission-routing.module';
import { MissionComponent } from './mission.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [MissionComponent],
  imports: [
    CommonModule,
    MissionRoutingModule,
    TranslateModule.forChild()
  ]
})
export class MissionModule { }

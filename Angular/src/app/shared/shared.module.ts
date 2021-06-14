import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { EnvPipe } from './pipes/env.pipe';
import { Select2Pipe } from './pipes/select2.pipe';
import { NgInitDirective } from './directives/ng-init.directive';
import { NgDestroyDirective } from './directives/ng-destroy.directive';
import { ImgDefaultPipe } from './pipes/img-default.pipe';
import { AudioDefaultPipe } from './pipes/audio-default.pipe';
import { WelcomeComponent } from './start/welcome/welcome.component';
import { SumPipe } from './pipes/sum.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    EnvPipe,
    Select2Pipe,
    NgInitDirective,
    NgDestroyDirective,
    ImgDefaultPipe,
    AudioDefaultPipe,
    WelcomeComponent,
    SumPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderComponent,
    EnvPipe,
    Select2Pipe,
    ImgDefaultPipe,
    NgInitDirective,
    NgDestroyDirective,
    AudioDefaultPipe,
    SumPipe
  ]
})
export class SharedModule { }

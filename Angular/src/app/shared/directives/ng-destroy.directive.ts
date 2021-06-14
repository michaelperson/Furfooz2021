import { Directive, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[ngDestroy]'
})
export class NgDestroyDirective implements OnDestroy {
  @Output()
  ngDestroy: EventEmitter<any> = new EventEmitter();
  
  ngOnDestroy(): void {
    this.ngDestroy.emit();
  }
}

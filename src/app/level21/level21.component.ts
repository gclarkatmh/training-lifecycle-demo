import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'lcd-level21',
  templateUrl: './level21.component.html',
})
export class Level21Component extends BaseComponent {
  protected logComponentName(hookName: string) {
    console.log(`1. ${hookName}`);
  }
}
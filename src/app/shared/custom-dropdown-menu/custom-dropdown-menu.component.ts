import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown-menu',
  templateUrl: './custom-dropdown-menu.component.html',
  styleUrl: './custom-dropdown-menu.component.css'
})
export class CustomDropdownMenuComponent {
  private timedOutCloser: any;

  constructor() { }

  mouseEnter(trigger: any) {
    if (this.timedOutCloser) {
      clearTimeout(this.timedOutCloser);
    }
    trigger.openMenu();
  }

  mouseLeave(trigger: any) {
    this.timedOutCloser = setTimeout(() => {
      trigger.closeMenu();
    }, 50);
  }
}

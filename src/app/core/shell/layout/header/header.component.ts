import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  openMenu(trigger: MatMenuTrigger) {
    trigger.openMenu();
  }
}



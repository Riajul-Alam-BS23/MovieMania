import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }
  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  openMenu(trigger: MatMenuTrigger) {
    trigger.openMenu();
  }
  onClick(url1: string, url2: string){
    this.router.navigate(['', url1 ,url2]);
  }
}



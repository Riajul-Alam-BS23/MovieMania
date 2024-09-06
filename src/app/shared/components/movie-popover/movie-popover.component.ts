// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-movie-popover',
//   templateUrl: './movie-popover.component.html',
//   styleUrls: ['./movie-popover.component.css']
// })
// export class MoviePopoverComponent {
//   @Input() videoUrl: string | undefined;
//   @Input() top: number | undefined;
//   @Input() left: number | undefined;
//   @Input() visible: boolean = false;

//   get popoverStyles() {
//     return {
//       position: 'absolute',
//       top: `${this.top}px`,
//       left: `${this.left}px`,
//       display: this.visible ? 'block' : 'none',
//       zIndex: 9999,
//     };
//   }
// }











// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-movie-popover',
//   templateUrl: './movie-popover.component.html',
//   styleUrl: './movie-popover.component.css'
// })
// export class MoviePopoverComponent {
//   @Input() videoUrl: string | undefined;
// }


import { Component, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-movie-popover',
  templateUrl: './movie-popover.component.html',
  styleUrls: ['./movie-popover.component.css']
})
export class MoviePopoverComponent implements AfterViewInit {
  @Input() videoUrl: string | undefined;
  @Input() top: number = 0;
  @Input() left: number = 0;
  @Input() visible: boolean = false; 

  @Input() height: number;
  @Input() width: number;
  
  popoverStyles: { [key: string]: string } = {}; 

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.setPosition();
    this.cdr.detectChanges();
  }

  private setPosition(): void {
    this.popoverStyles = {
      'position': 'absolute',
      'top': `${this.top+10}px`,
      'left': `${this.left+10}px`,
      'height': `${this.height}px`,
      'width': `${this.width}px`,
      'visibility': this.visible ? 'visible' : 'hidden',
      'z-index': '9999'
    };
    console.log("Popover position --->",this.popoverStyles);
  }
}

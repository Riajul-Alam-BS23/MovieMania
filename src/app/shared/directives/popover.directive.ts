// import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
// import { ViewContainerRef, ComponentRef } from '@angular/core';
// import { MoviePopoverComponent } from '../components/movie-popover/movie-popover.component';

// @Directive({
//     selector: '[appPopover]'
// })
// export class PopoverDirective {
//     @Input() videoUrl: string | undefined;
//     @Input() height: number | undefined;

//     private popoverComponentRef: ComponentRef<MoviePopoverComponent> | null = null;
//     private isInsidePopover = false;

//     constructor(
//         private elementRef: ElementRef,
//         private renderer: Renderer2,
//         private viewContainerRef: ViewContainerRef
//     ) { }

//     @HostListener('mouseenter', ['$event'])
//     onMouseEnter(event: MouseEvent) {
//         if (this.videoUrl) {
//             const factory = this.viewContainerRef.createComponent(MoviePopoverComponent);
//             this.popoverComponentRef = factory;
//             const popoverElement = this.popoverComponentRef.location.nativeElement;
//             this.popoverComponentRef.instance.videoUrl = this.videoUrl;

//             const rect = (this.elementRef.nativeElement as HTMLElement).getBoundingClientRect();

//             this.renderer.setStyle(popoverElement, 'position', 'absolute');
//             this.renderer.setStyle(popoverElement, 'top', `${rect.top - (this.height||450)}px`);
//             this.renderer.setStyle(popoverElement, 'left', `${rect.left}px`); 
//             this.renderer.setStyle(popoverElement, 'z-index', '9999'); 

//             document.body.appendChild(popoverElement); 

//             this.renderer.listen(popoverElement, 'mouseenter', () => {
//                 this.isInsidePopover = true; 
//             });
//             this.renderer.listen(popoverElement, 'mouseleave', () => {
//                 this.isInsidePopover = false; 
//                 this.onMouseLeave(); 
//             });
//         }
//     }

//     @HostListener('mouseleave')
//     onMouseLeave() {

//         if (!this.isInsidePopover && this.popoverComponentRef) {
//             this.popoverComponentRef.destroy(); 
//             this.popoverComponentRef = null;
//         }
//     }
// }

// avoid it because of direct dom manipulation




import { Directive, ElementRef, HostListener, Input, ComponentRef, ViewContainerRef } from '@angular/core';
import { MoviePopoverComponent } from '../components/movie-popover/movie-popover.component';

@Directive({
    selector: '[appPopover]'
})
export class PopoverDirective {
    @Input() videoUrl: string | undefined;
    @Input() height: number | undefined;
    @Input() width: number | undefined;

    private popoverComponentRef: ComponentRef<MoviePopoverComponent> | null = null;
    private isHoveringMovie = false;
    private isHoveringPopover = false;

    constructor(
        private viewContainerRef: ViewContainerRef
    ) { }

    @HostListener('mouseenter')
    onMouseEnterMovie() {
        this.isHoveringMovie = true;
        this.openPopover();
    }

    @HostListener('mouseleave')
    onMouseLeaveMovie() {
        this.isHoveringMovie = false;
        this.closePopoverIfNeeded();
    }

    private openPopover() {
        if (!this.popoverComponentRef && this.videoUrl) {
            
            const popoverFactory = this.viewContainerRef.createComponent(MoviePopoverComponent);

            this.popoverComponentRef = popoverFactory;
            const popoverInstance = this.popoverComponentRef.instance;

            // Pass data to the component
            popoverInstance.videoUrl = this.videoUrl;
            popoverInstance.visible = true;
            popoverInstance.height= this.height;
            popoverInstance.width = this.width;

            // Listen to mouse events on the popover itself
            this.popoverComponentRef.location.nativeElement.addEventListener('mouseenter', () => {
                this.isHoveringPopover = true;
            });
            this.popoverComponentRef.location.nativeElement.addEventListener('mouseleave', () => {
                this.isHoveringPopover = false;
                this.closePopoverIfNeeded();
            });
        }
    }

    private closePopoverIfNeeded() {
        if (!this.isHoveringMovie && !this.isHoveringPopover && this.popoverComponentRef) {
            this.popoverComponentRef.destroy();
            this.popoverComponentRef = null;
        }
    }
}

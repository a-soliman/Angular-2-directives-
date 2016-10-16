import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener( 'mouseenter' ) mouseover() {
  	this.backgroundColor = this.highlightColor;
  };
  @HostListener( 'mouseenter' ) mouseleave() {
  	this.backgroundColor = this.defaultColor;
  };
  @HostBinding( 'style.backgroundColor' ) get setColor() {
  	return this.backgroundColor;
  };
  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';
  private backgroundColor = this.defaultColor;

  constructor() { 
  	console.log("works")
  	// this.elementRef.nativeElement.style.backgroundColor = 'green';
  	// this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')
  }

}

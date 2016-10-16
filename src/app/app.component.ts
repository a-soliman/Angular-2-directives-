import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styles: [`
	.border { 
		border: 1px solid blue;
	}
	.background {
		background-color: green;
	}
	div {
		width: 100px;
		height: 100px;
	}
  `]
})
export class AppComponent {
	private switch = true;
	private items = [1, 2, 3, 4, 5];
	private value = 100;
	onSwitch() {
		this.switch = !this.switch;
	}

}

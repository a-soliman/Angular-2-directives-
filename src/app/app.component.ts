import { Component } from '@angular/core';

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

}

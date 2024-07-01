import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent,ChildComponentComponent,HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-intro';
  style  = {
    color:  ''
  }

  hideText : boolean = false

  showAlert = (event : any)=> {
    this.style.color = event
  }

  childClickEvent(event:string) {
    console.log(event, "aastha")
  }
}

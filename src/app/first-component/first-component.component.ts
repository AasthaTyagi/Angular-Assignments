import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule, ChildComponentComponent, HighlightDirective],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  @Input() style ={ color : ''}
  @Output() childClicked = new EventEmitter()

  constructor(){}

  passToParent =()=> {
    this.childClicked.emit("It's clicked")
  }

}

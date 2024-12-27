import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animation-text',
  imports: [],
  templateUrl: './animation-text.component.html',
  styleUrl: './animation-text.component.css'
})
export class AnimationTextComponent {
  @Input() texte: string = '';  // Cette propriété va recevoir le texte
}

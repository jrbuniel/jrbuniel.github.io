import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('noButton') noButton?: ElementRef<HTMLButtonElement>;

  accepted = false;
  dodgeCount = 0;

  readonly promptLines = [
    'Will you go out with me?',
    'Please?',
    'Still thinking about it?',
    'That button is trying its best to save me.',
    'I am taking that as a very soft maybe.'
  ];

  get prompt(): string {
    return this.promptLines[Math.min(this.dodgeCount, this.promptLines.length - 1)];
  }

  sayYes(): void {
    this.accepted = true;
  }

  moveNoButton(): void {
    const button = this.noButton?.nativeElement;

    if (!button || this.accepted) {
      return;
    }

    this.dodgeCount += 1;

    const maxX = Math.max(window.innerWidth - button.offsetWidth - 32, 0);
    const maxY = Math.max(window.innerHeight - button.offsetHeight - 32, 0);
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  }
}

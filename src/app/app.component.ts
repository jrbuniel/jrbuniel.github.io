import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faClipboard = faClipboard;

  // constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  // ngOnInit() {
  //   const messageState = document.getElementById('messageState') as HTMLInputElement;

  //   messageState.addEventListener('change', () => {
  //     const message = document.querySelector('.message') as HTMLElement;
  //     const heart = document.querySelector('.heart') as HTMLElement;
  //     const container = document.querySelector('.container') as HTMLElement;

  //     message.classList.remove('openNor', 'closeNor');
  //     if (messageState.checked) {
  //       message.classList.remove('closed', 'no-anim');
  //       message.classList.add('openNor');
  //       heart.classList.remove('closeHer', 'openedHer');
  //       heart.classList.add('openHer');

  //       this.renderer2.setStyle(container, 'backgroundColor', '#f48fb1');
  //       console.log('Abrindo');
  //     } else {
  //       message.classList.remove('no-anim');
  //       message.classList.add('closeNor');
  //       heart.classList.remove('openHer', 'openedHer');
  //       heart.classList.add('closeHer');

  //       this.renderer2.setStyle(container, 'backgroundColor', '#fce4ec');
  //       console.log('Fechando');
  //     }
  //   });

  //   const message = document.querySelector('.message') as HTMLElement;
  //   if (message) {
  //     message.addEventListener('webkitAnimationEnd', this.animationEndHandler.bind(this));
  //     message.addEventListener('oanimationend', this.animationEndHandler.bind(this));
  //     message.addEventListener('msAnimationEnd', this.animationEndHandler.bind(this));
  //     message.addEventListener('animationend', this.animationEndHandler.bind(this));
  //   }

  //   const heart = document.querySelector('.heart') as HTMLElement;
  //   if (heart) {
  //     heart.addEventListener('webkitAnimationEnd', this.heartAnimationEndHandler.bind(this));
  //     heart.addEventListener('oanimationend', this.heartAnimationEndHandler.bind(this));
  //     heart.addEventListener('msAnimationEnd', this.heartAnimationEndHandler.bind(this));
  //     heart.addEventListener('animationend', this.heartAnimationEndHandler.bind(this));
  //   }
  // }

  // private animationEndHandler(e: AnimationEvent) {
  //   console.log('Animation End');
  //   const message = document.querySelector('.message') as HTMLElement;

  //   if (message && message.classList.contains('closeNor')) {
  //     message.classList.add('closed');
  //   }
  //   if (message) {
  //     message.classList.remove('openNor', 'closeNor');
  //     message.classList.add('no-anim');
  //   }
  // }

  // private heartAnimationEndHandler(e: AnimationEvent) {
  //   console.log('Heart Animation End');
  //   const heart = document.querySelector('.heart') as HTMLElement;

  //   if (heart && !heart.classList.contains('closeHer')) {
  //     heart.classList.add('openedHer', 'beating');
  //   } else {
  //     if (heart) {
  //       heart.classList.add('no-anim');
  //       heart.classList.remove('beating');
  //     }
  //   }
  //   if (heart) {
  //     heart.classList.remove('openHer', 'closeHer');
  //   }
  // }
}

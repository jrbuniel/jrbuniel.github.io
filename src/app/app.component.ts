import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faClipboard = faClipboard;
  
  open: boolean = false;
  text: string = 'Happy Anniversary my love <br> haha';

  ngOnInit() {
      
  }

  // click(): void {
  //   this.open = !this.open;

  //   if (this.open) {

  //   }
  // }

  nextPage(): void {
    window.location.href = "yes";
  }

  moveButton(): void {
    var noButton = document.getElementById('noButton') as HTMLElement;

    var x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  }
}

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
  
  open: boolean = false;
  text: string = 'Happy Anniversary my love <br> haha';

  ngOnInit() {
      
  }

  click(): void {
    this.open = !this.open;

    if (this.open) {

    }
  }
}

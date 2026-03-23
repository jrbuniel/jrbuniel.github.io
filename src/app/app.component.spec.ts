import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the app', () => {
    expect(component).toBeTruthy();
  });

  it('renders the initial prompt and action buttons', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;

    expect(nativeElement.querySelector('h1')?.textContent).toContain('Will you go out with me?');
    expect(nativeElement.textContent).toContain('Yes');
    expect(nativeElement.textContent).toContain('No');
  });

  it('shows the celebration state after clicking yes', () => {
    const yesButton = fixture.debugElement.query(By.css('.btn--yes'));

    yesButton.triggerEventHandler('click');
    fixture.detectChanges();

    const nativeElement = fixture.nativeElement as HTMLElement;
    expect(nativeElement.querySelector('h1')?.textContent).toContain('Yay. It is a date.');
    expect(nativeElement.textContent).toContain('Mission accomplished');
  });
});

import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  template: `
  <form class="centred form" [style]="{'justify-content': 'center'}">
  <h2 class="mb">Oбратная связь</h2>
  <textarea [value]="feedback()" 
  (input)= "handleChange($event)" 
  class="form-control"></textarea>
  </form>
  `,
})

export class FeedbackComponent implements OnInit, OnDestroy {
  feedback = signal('');

  constructor(private telegram: TelegramService) {
    this.sendData = this.sendData.bind(this);
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText('Oтправить сообщение');
    this.telegram.MainButton.show();
    this.telegram.MainButton.disable();
    this.telegram.MainButton.onClick(this.sendData);
  }
  sendData() {
    this.telegram.sendData({ feedback: this.feedback() });
  }

  handleChange(event) {
    this.feedback.set(event.target.value);
    if (this.feedback().trim()) {
      this.telegram.MainButton.enable();
    } else {
      this.telegram.MainButton.disable();
    }
  }

  ngOnDestroy(): void {
    this.telegram.MainButton.offClick(this.sendData);
  }


}

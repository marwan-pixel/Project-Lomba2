import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  active() {
    const header = document.querySelectorAll('ion-label h5');
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < header.length; i++) {
      header[i].addEventListener('click', () => {
        // eslint-disable-next-line prefer-const
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        header[i].className += ' active';
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  active() {
    const header = document.querySelectorAll('ion-label h5');
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    // for (let i = 0; i < header.length; i++) {
    //   header[i].addEventListener('click', () => {
    //     let current = document.getElementsByClassName('active');
    //     current[0].className = current[0].className.replace('active', '');
    //     header[i].className += ' active';
    //   });
    // }
  }
}

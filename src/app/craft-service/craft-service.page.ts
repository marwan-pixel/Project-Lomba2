import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-craft-service',
  templateUrl: './craft-service.page.html',
  styleUrls: ['./craft-service.page.scss'],
})
export class CraftServicePage implements OnInit {

  constructor() {}

  ngOnInit() {

  }
  active() {
    const header = document.querySelectorAll('ion-chip');
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < header.length; i++) {
      header[i].addEventListener('click', () => {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        header[i].className += ' active';
      });
    }
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  options = {
    slidesPerView: 3,
    // centeredSlides: true,
    spaceBeetwen: 5,
  };
}

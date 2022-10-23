import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private navCtrl: NavController) {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  option = {
    slidesPerView: 1.2,
    // centeredSlides: true,
    spaceBeetwen: 5,
  };
  toAccount() {
    this.navCtrl.navigateForward('/account');
  }
}

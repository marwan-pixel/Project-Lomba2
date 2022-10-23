import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-newbusiness',
  templateUrl: './newbusiness.page.html',
  styleUrls: ['./newbusiness.page.scss'],
})
export class NewbusinessPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // if (ev.detail.role === 'confirm') {
    //   this.message = `Hello, ${ev.detail.data}!`;
    // }
  }

  cancelAdd() {
    this.modal.dismiss(null, 'cancel');
  }
  confirmAdd() {
    this.modal.dismiss('confirm');
  }
}

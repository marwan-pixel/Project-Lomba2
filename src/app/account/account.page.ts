import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Pilihan Bahasa',
      buttons: ['OK'],
      cssClass: 'customAlert ',
      inputs: [
        {
          label: 'Bahasa Indonesia',
          type: 'radio',
          value: 'indonesia',
        },
        {
          label: 'Bahasa Inggris',
          type: 'radio',
          value: 'inggris',
        },
      ],
    });

    await alert.present();
  }
}

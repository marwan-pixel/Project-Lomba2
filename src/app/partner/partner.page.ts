import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-partner',
  templateUrl: './partner.page.html',
  styleUrls: ['./partner.page.scss'],
})
export class PartnerPage implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Pilih jam kerja',
      buttons: ['OK'],
      inputs: [
        {
          label: 'Senin',
          type: 'checkbox',
          value: 'red',
        },
        {
          label: 'Selasa',
          value: 'blue',
        },
        {
          label: 'Rabu',

          value: 'green',
        },
        {
          label: 'Kamis',

          value: 'red',
        },
        {
          label: 'Jumat',

          value: 'blue',
        },
        {
          label: 'Sabtu',

          value: 'green',
        },
        {
          label: 'Minggu',

          value: 'green',
        },
      ],
    });

    await alert.present();
  }
}

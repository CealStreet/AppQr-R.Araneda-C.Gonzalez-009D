import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  async Generar(){
    const alert = await this.alertController.create({
      header: 'QR Generado',
      message: '<img src="assets/Code.png" class="ion-padding">',
      buttons: ['OK'],
      mode:"ios",
    });

    await alert.present();
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}

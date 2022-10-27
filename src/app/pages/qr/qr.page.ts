import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor(private alertController: AlertController,
              private menuController : MenuController) { }

  ngOnInit() {
  }


  async Escaneo() {
    const alert= await this.alertController.create({
      header: 'Asistencia Confirmada',
      message: 'Escaneado exitosamente',
      buttons: ['OK'],
      mode:"ios",
    });

    await alert.present();
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}

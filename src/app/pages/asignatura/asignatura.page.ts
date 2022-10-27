import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}

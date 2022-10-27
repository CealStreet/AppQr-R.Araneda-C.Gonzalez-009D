
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(private menuController: MenuController) { }

  Usuario=localStorage.getItem('nombre')


  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  Nombre=localStorage.getItem('nombre');


  cerrarSesion(){
    localStorage.removeItem('ingresado');
  }

}
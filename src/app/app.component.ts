import { Component } from '@angular/core';
import { RegistroserviceService, Usuario } from '../../src/app/service/registroservice.service';


interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  dato: Usuario[] = [];
  constructor(private registroService: RegistroserviceService) {}


  componentes : Componente[] = [
    {
      
      icon: 'home-sharp',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'camera-sharp',
      name: 'Foto QR',
      redirecTo: '/qr'
    },
      
    {
      icon: 'book-sharp',
      name: 'Asignaturas',
      redirecTo: '/asignatura'
    },
    {
      icon: 'calendar-clear-sharp',
      name: 'Asistencia',
      redirecTo: '/asistencia'
    },
    
    {
      icon: 'qr-code-outline',
      name: 'GenerarQr',
      redirecTo: '/escanear'
    },
    {
      icon: 'calendar-outline',
      name: 'Feriado',
      redirecTo: '/feriado'
    },
    {
      icon: 'log-out-outline',
      name: 'Cerrar Sesión',
      redirecTo: '/login'
    },
  ];
  componente: Componente[] = [
    {
      icon: 'wifi-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'book-outline',
      name: 'Modificar Datos',
      redirecTo: '/datos'
    },
    {
      icon: 'documents-outline',
      name: 'Asistencia',
      redirecTo: '/asistencia-alumno'
    },
  ];



}
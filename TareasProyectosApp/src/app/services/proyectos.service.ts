import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private _proyectos=[
    new Proyecto(1,'App Android'),
    new Proyecto(2,'App IOs'),
  ];

  constructor() { }

  getProyectos():Proyecto[]{
    return this._proyectos;
  }

  getProyectoById(pid:number):Proyecto{
    return this._proyectos.find((aP:Proyecto)=>{return aP.pid==pid;});
  }
}
